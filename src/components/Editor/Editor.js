import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";
import PlusIcon from '../PlusIcon/PlusIcon';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ' ',
      showNewEditor: false,
      icons: 'toolbar',
    }
  }

  updateContent = (newContent) => {
    this.setState({
      content: newContent,
    })
  }

  onChange = (event) => {
    console.log("onChange fired with event info: ", event);
    var newContent = event.editor.getData();
    console.log(newContent)
    this.setState({
      content: newContent,
      showNewEditor: !this.state.showNewEditor,
      icons: 'clipboard, pastetext, pastefromword,specialchar,tab,table,tabletools,undo,wsc,a11yhelp,about,basicstyles,sourcearea,showborders,scayt,resize,maximize,blockquote,format,horizontalrule,stylescombo,list,indent,indentlist,removeformat'
    })
    // event.editor.destroy(true);
  }

  onBlur = (event) => {
    console.log("onBlur event called with event info: ", event);
  }

  afterPaste = (event) => {
    console.log("afterPaste event called with event info: ", event);
  }

  render() {
    return (
      <div className="editor">
        <PlusIcon handleClick={this.onClick}/>
        {this.state.showNewEditor &&
          <CKEditor
            config={
              {
                removePlugins: this.state.icons
              }
            }
          />
        }
        <CKEditor
          activeClass="p10"
          content={this.state.content}
          config={
            {
              removePlugins: 'toolbar'
            }
          }
          events={{
            "blur": this.onBlur,
            "afterPaste": this.afterPaste,
            "change": this.onChange,
            "keydown": this.onChange,
            "keyup": this.onChange
          }}
         />
      </div>
    )
  }
}

export default Editor;
