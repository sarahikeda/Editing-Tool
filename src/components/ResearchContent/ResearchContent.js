import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Post from './ResearchPosts/ResearchPosts';
import Following from './Followings/Following';
import classnames from 'classnames';
import API from './../../services/api';
//import StaticApi from './../../services/staticApi';
import AsyncWrapper from './../../services/asyncWrapper';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import SearchMenuItem from './SearchMenuItem';
//import searchJson from './../../staticJson/rf_search_dd.json';

class ResearchContent extends Component {
  state = {
    sections: [
      {"id": "t_1", "name": "Research Feed"},
      {"id": "t_2", "name": "My Previous Content"},
      {"id": "t_3", "name": "Following"},
    ],
    posts: [],
    followings: [],
    activeTab: 't_1',
    showLoader: false,
    expandContentArea: false,
    allowNew: false,
    isLoading: false,
    multiple: false,
    options: [],
    
  }
  activeTb = ['nav-link'];
  showContent = ["animated"];
  counter = 0;

  componentDidMount(){
    this.getPosts('t_1');
  }

  getPosts = async tab => {
    let show_Loader, url, err, response;
    show_Loader = this.state.showLoader;
    this.setState({showLoader: !show_Loader});

    if(tab === 't_1') url = "/posts.json?key=3dfc1d20&tab=research_feed"
    else if(tab === 't_2') url = "/posts.json?key=3dfc1d20&tab=my_previous_content"
    else {
      this.setState({posts: [], showLoader: show_Loader});
      return
    }

    [ err, response ] = await AsyncWrapper(API.get(url));
    if(err) {console.log(err)};
    if(response && response.status === 200) {
      show_Loader = this.state.showLoader
      this.setState({posts: response.data, showLoader: !show_Loader})
    }
  }

  getFollowing = async () => {
    let show_Loader, url, err, response;
    show_Loader = this.state.showLoader;
    this.setState({showLoader: !show_Loader});
    url = "/following.json?key=3dfc1d20";
    [ err, response ] = await AsyncWrapper(API.get(url));
    if(err) {console.log(err)};
    if(response && response.status === 200) {
      show_Loader = this.state.showLoader
      this.setState({followings: response.data, showLoader: !show_Loader})
    }
  }
  
  handleSearch = async query => {
    let url, response, err;
    this.setState({isLoading: true});
    url = `/search.json?key=3dfc1d20&q=${query}`;
    [ err, response ] = await AsyncWrapper(API.get(url))
    if(err) {console.log(err)};
    if(response && response.status === 200) {
      this.setState({isLoading: false, options: response.data})
    }
  }

  onSelectSearchItem(item){
    console.log(item)
    if(item.length > 0){
      let id = item[0].id;
      let category = item[0].author ? 'author' : 'topic';
      let name = item[0].author ? item[0].name : item[0].sector;
      let queryObj = {"id": id, "category": category, "name":name}
      this.fetchSearchResults(queryObj)
    }
  }

  fetchSearchResults = async queryObj => {
    let show_Loader, url, err, response;
    show_Loader = this.state.showLoader;
    this.setState({showLoader: !show_Loader});

    if(this.state.activeTab === 't_1') url = `/posts.json?key=3dfc1d20&tab=research_feed&id=${queryObj.id}&category=${queryObj.category}&name=${queryObj.name}`
    else if(this.state.activeTab === 't_2') url = `/posts.json?key=3dfc1d20&tab=my_previous_content&id=${queryObj.id}&category=${queryObj.category}&name=${queryObj.name}`
    else {
      this.setState({posts: [], showLoader: show_Loader});
      return
    }

    [ err, response ] = await AsyncWrapper(API.get(url));
    if(err) {console.log(err)};
    if(response && response.status === 200) {
      show_Loader = this.state.showLoader
      this.setState({posts: response.data, showLoader: !show_Loader})
    }
  }



  toggleTab = tab => {
    let tabState = this.state.activeTab;
    const posts = [];
    const  following = [];
    if(this.state.activeTab !== tab){
        tabState = tab;
        this.setState({posts: posts, following: following, "activeTab": tabState});
        if(tab!== 't_3')this.getPosts(tab)
        else this.getFollowing();
    }
  }

  expandCollapseContent = () => {
    let checkIfExpand = this.state.expandContentArea;
    this.setState({"expandContentArea": !checkIfExpand})
    if(this.showContent.length > 1) this.showContent.pop();
    if(!checkIfExpand) this.showContent.push("zoomIn")
    else this.showContent.push("fadeOut")
  }

  initiateDisplay = (checkIfCollapsed) => ({
    display: checkIfCollapsed ? 'block' : 'none'
  })

  render() {
    
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} specs={{...post}}/>;
    })

    const followings = <Following specs={this.state.followings} />
   

    const tabs = this.state.sections.map(tab => {
      return  (
        <li key={tab.id} className="nav-item">
          <a className={classnames("nav-link", { active: this.state.activeTab === tab.id })} onClick={this.toggleTab.bind(this, tab.id)}>{tab.name}</a>
        </li>
      )
    })
    
    let showPlusIcon = this.state.expandContentArea ? {'display': 'none'} : {'display': 'inline-block'};
    let showMinusIcon = this.state.expandContentArea ? {'display': 'inline-block'} : {'display': 'none'};

    return (

      <div className="research-content mt-3">
        <h5 className="research-head-title mb-3" onClick={this.expandCollapseContent.bind(this)}>
          <span><FontAwesomeIcon icon="plus" className={"mr-1"} style={showPlusIcon}/></span>
          <span><FontAwesomeIcon icon="minus" className={"mr-1"} style={showMinusIcon}/></span>
          Research Content
        </h5>

        {/* <Fade in={this.state.fadeIn} tag="h5" className="mt-3">  */}
          <div className={this.showContent.join(' ')} style={this.initiateDisplay(this.state.expandContentArea) }>
              <ul className="nav nav-tabs mb-3">
                  {tabs}
              </ul>

              <div className="input-group stylish-input-group mb-3">
                {/* <input type="text" className="form-control search-input has-search" placeholder="Search" onKeyPress={this.getSearchPosts}></input> */}
                <AsyncTypeahead
                  style={{width: '100vw'}}
                  {...this.state}
                  labelKey={option =>  option.author ? `${option.name}` : `${option.sector}`}
                  minLength={2}
                  onSearch={this.handleSearch}
                  placeholder="Search..."
                  renderMenuItemChildren={(option, props, idx) => (
                    <SearchMenuItem key={option.id} item={option}/>
                  )}
                  onChange={ selected => this.onSelectSearchItem(selected) }
                />
              </div>
              <div className="Posts">
                <section>
                  <FontAwesomeIcon icon="spinner" pulse spin className={!this.state.showLoader ? "showLoader" : "initShow"}/>
                  {this.state.activeTab !== 't_3' ? posts : followings}
                </section>
              </div>
          </div>
        {/* </Fade> */}
      
        

      </div>
    );
  }
}

export default ResearchContent;
