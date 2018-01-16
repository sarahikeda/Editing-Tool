import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";

class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Drag files here or just start typing',
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
      <div className="sandbox">

        <CKEditor
          activeClass="ck-editor"
          content={this.state.content}
          config={
            {
              removeButtons: 'Copy,Cut,Clipboard,Paste,Undo,Redo,Print,Form,TextField,Textarea,Button,SelectAll,NumberedList,BulletedList,CreateDiv,Table,PasteText,PasteFromWord,Select,HiddenField'
            },
            {
              removePlugins: 'sourcearea, format,stylescombo,table,blockquote, elementspath,save,image,flash,iframe,link,smiley,specialchar,pastefromword, pastetext,tabletools,find,pagebreak,templates,about,maximize,showblocks,newpage,language, undo, basicstyles, horizontalrule, removeformat, clipboard, toolbar'
            }
          }
          events={{
            "blur": this.onBlur,
            "afterPaste": this.afterPaste,
            "change": this.onChange
          }}
        />
      </div>
    )
  }
}


export default Sandbox;
