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
      axios.get("https://jsonplaceholder.typicode.com/posts")
          .then( response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
              return {
                ...post,
                author: "Frank Goodwill"
              }
            })
            this.setState({posts: updatedPosts})
          }
      )
    }
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} body={post.body} author={post.author}/>;
    })
    return (
      <div className="research-content">
        <h5 className="research-title">RESEARCH CONTENT</h5>
          <div className="input-group stylish-input-group">
            <input type="text" className="form-control search-input has-search" placeholder="Search" onKeyPress={this.getPosts}></input>
          </div>
          <section className="Posts">
            {posts}
          </section>
      </div>
    );
  }
}

export default ResearchContent;
