import React, { Component } from 'react';
import axios from 'axios';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Post from './ResearchPosts/ResearchPosts';
import classnames from 'classnames';

class ResearchContent extends Component {
  state = {
    sections: [
      {"id": "t_1", "name": "Research Feed"},
      {"id": "t_2", "name": "My Previous Content"},
      {"id": "t_3", "name": "Following"},
    ],
    posts: [],
    activeTab: 't_1',
    showLoader: false,
    expandContentArea: false
  }
  activeTb = ['nav-link'];
  showContent = ["animated"];
  counter = 0;

  componentDidMount() {
    //todo
    this.getPosts();
  }

  getPosts = () => {
    let show_Loader = this.state.showLoader;
    //if (event.charCode === 13) {
    //  event.preventDefault();
      this.setState({showLoader: !show_Loader})
      axios.get("https://my.api.mockaroo.com/posts.json?key=3dfc1d20")
          .then( response => {
            let new_show_loader = this.state.showLoader
            this.setState({posts: response.data, showLoader: !new_show_loader})
          }
      )
    //}
  }

  getSearchPosts = () => {
    //todo
  }

  toggleTab = tab => {
    let tabState = this.state.activeTab;
    if(this.state.activeTab !== tab){
        tabState = tab;
        this.setState({"activeTab": tabState});
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
      //return <Post key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} id={post.id}/>;
      return <Post key={post.id} specs={{...post}}/>;
    })

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
                <input type="text" className="form-control search-input has-search" placeholder="Search" onKeyPress={this.getSearchPosts}></input>
              </div>
              <div className="Posts">
                <section>
                  <FontAwesomeIcon icon="spinner" pulse spin className={!this.state.showLoader ? "showLoader" : "initShow"}/>
                  {posts}
                </section>
              </div>
          </div>
        {/* </Fade> */}
      
        

      </div>
    );
  }
}

export default ResearchContent;
