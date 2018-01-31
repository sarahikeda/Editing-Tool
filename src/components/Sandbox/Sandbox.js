import React, { Component } from 'react';
import Editor from '../Editor/Editor';

class Sandbox extends Component {

  onChange = (event) => {
    console.log("onChange fired with event info: ", event);
    var newContent = event.editor.getData();
    this.setState({
      content: newContent
    })
  }


  render() {
    return (
      <div className="sandbox">
        <Editor/>
      </div>
    )
  }
}


export default Sandbox;
