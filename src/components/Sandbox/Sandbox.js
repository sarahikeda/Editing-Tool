import React, { Component } from 'react';
import Editor from '../Editor/Editor';

class Sandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showIcons: false,
      icons: 'sourcearea, format,stylescombo,table,blockquote, elementspath,save,flash,smiley,specialchar,pastefromword, pastetext,tabletools,find,pagebreak,templates,about,maximize,showblocks,newpage,language, undo, horizontalrule, removeformat, toolbar, clipboard',
    }
  }

  updateContent = (newContent) => {
    this.setState({
      content: newContent,
      showIcons: false,
    })
  }

  onChange = (event) => {
    console.log("onChange fired with event info: ", event);
    var newContent = event.editor.getData();
    this.setState({
      content: newContent
    })
  }

  changeToolBar = () => {
    this.setState({
      showIcons: !this.state.showIcons,
    }, function() {
      this.changeIcons();
    })
  }

  changeIcons = () => {
    if (this.state.showIcons) {
      this.setState({
        icons: 'sourcearea, format,stylescombo,table,blockquote, elementspath,save,flash,smiley,specialchar,pastefromword, pastetext,tabletools,find,pagebreak,templates,about,maximize,showblocks,newpage,language, undo, horizontalrule, removeformat'
      })
    } else {
      this.setState({
        icons: 'sourcearea, format,stylescombo,table,blockquote, elementspath,save,flash,smiley,specialchar,pastefromword, pastetext,tabletools,find,pagebreak,templates,about,maximize,showblocks,newpage,language, undo, horizontalrule, removeformat, clipboard, toolbar'
      })
    }
  }

  render() {
    return (
      <div className="sandbox">
        <Editor icons={this.state.icons} time={this.state.time}/>
      </div>
    )
  }
}


export default Sandbox;
