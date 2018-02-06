import React, { Component } from 'react';
import axios from 'axios';
import Post from './ResearchPosts/ResearchPosts';

class ResearchContent extends Component {
  state = {
    posts: []
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

  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} id={post.id}/>;
    })
    return (
      <div className="research-content">
        <h5 className="research-head-title">RESEARCH CONTENT</h5>
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
