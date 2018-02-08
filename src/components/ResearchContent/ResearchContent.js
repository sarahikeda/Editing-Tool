import React, { Component } from 'react';
import axios from 'axios';
import Post from './ResearchPosts/ResearchPosts';

class ResearchContent extends Component {
  state = {
    posts: [],
    activeTab: '1'
  }

  componentDidMount() {
    //todo
  }

  getPosts = event => {
    if (event.charCode === 13) {
      event.preventDefault();
      axios.get("https://my.api.mockaroo.com/posts.json?key=3dfc1d20")
          .then( response => {
            this.setState({posts: response.data})
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
    return (
      <div className="research-content">
        <h5 className="research-head-title">- Research Content</h5>

        <ul className="nav nav-tabs mb-2">
              <li className="nav-item"><a className="nav-link active" onClick={this.toggleTab.bind(this, "1")}>Research Feed</a></li>
              <li className="nav-item"><a className="nav-link" onClick={this.toggleTab.bind(this, "2")}>My Previous Content</a></li>
              <li className="nav-item"><a className="nav-link" onClick={this.toggleTab.bind(this, "3")}>Following</a></li>
          </ul>

          <div className="input-group stylish-input-group mb-3">
            <input type="text" className="form-control search-input has-search" placeholder="Search" onKeyPress={this.getPosts}></input>
          </div>
          <div className="Posts">
            <section>
              {posts}
            </section>
          </div>
      </div>
    );
  }
}

export default ResearchContent;
