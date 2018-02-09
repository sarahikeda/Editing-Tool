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
    showLoader: false
  }
  activeTb = ['nav-link'];

  componentDidMount() {
    //todo
  }

  getPosts = event => {
    let show_Loader = this.state.showLoader;
    if (event.charCode === 13) {
      event.preventDefault();
      this.setState({showLoader: !show_Loader})
      axios.get("https://my.api.mockaroo.com/posts.json?key=3dfc1d20")
          .then( response => {
            let new_show_loader = this.state.showLoader
            this.setState({posts: response.data, showLoader: !new_show_loader})
          }
      )
    }
  }

  toggleTab = tab => {
    let tabState = this.state.activeTab;
    if(this.state.activeTab !== tab){
        tabState = tab;
        this.setState({"activeTab": tabState});
    }
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} id={post.id}/>;
    })

    const tabs = this.state.sections.map(tab => {
      return  (
          <li key={tab.id} className="nav-item">
            <a className={classnames("nav-link", { active: this.state.activeTab === tab.id })} onClick={this.toggleTab.bind(this, tab.id)}>{tab.name}</a>
          </li>
      )
    })

    return (
      <div className="research-content">
        <h5 className="research-head-title">- Research Content</h5>

        <ul className="nav nav-tabs mb-3">
              {tabs}
          </ul>

          <div className="input-group stylish-input-group mb-3">
            <input type="text" className="form-control search-input has-search" placeholder="Search" onKeyPress={this.getPosts}></input>
          </div>
          <div className="Posts">
            <section>
              <FontAwesomeIcon icon="spinner" pulse spin className={classnames("initShow", {showLoader: this.state.showLoader})}/>
              {posts}
            </section>
          </div>
      </div>
    );
  }
}

export default ResearchContent;
