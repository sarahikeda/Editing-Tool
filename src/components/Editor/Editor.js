import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import PlusIcon from '../PlusIcon/PlusIcon';
import CKEditor from "react-ckeditor-component";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
    this.state = {
      content: 'content',
    }
  }

  updateContent = (newContent) => {
    this.setState({
      content: newContent
    })
  }

  onChange = (evt) => {
    console.log("onChange fired with event info: ", evt);
    var newContent = evt.editor.getData();
    this.setState({
      content: newContent
    })
  }

  onBlur = (evt) => {
    console.log("onBlur event called with event info: ", evt);
  }

  afterPaste = (evt) => {
    console.log("afterPaste event called with event info: ", evt);
  }

  render() {
    return (
      <CKEditor
        activeClass="editor1"
        content={this.state.content}
        scriptUrl='../../ckeditor/ckeditor.js'
        events={{
          "blur": this.onBlur,
          "afterPaste": this.afterPaste,
          "change": this.onChange
        }}
      />
    )
  }
 }

 export default Editor;
