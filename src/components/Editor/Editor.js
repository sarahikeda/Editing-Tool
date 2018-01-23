import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import PlusIcon from '../PlusIcon/PlusIcon';
const loadScript = require('load-script');

var defaultScriptUrl = "https://cdn.ckeditor.com/4.8.0/basic/ckeditor.js";

class Editor extends React.Component {
  constructor(props) {
    super(props);

    //State initialization
    this.state = {
      isScriptLoaded: this.props.isScriptLoaded,
      config: this.props.removePlugins
    };
  }

  //load ckeditor script as soon as component mounts if not already loaded
  componentDidMount() {
    if(!this.props.isScriptLoaded){
      loadScript(this.props.scriptUrl, this.onLoad);
    }else{
      this.onLoad();
    }
  }

  componentWillUnmount() {
    this.unmounting = true;
  }

  onLoad = () => {
    if (this.unmounting) return;

    this.setState({
      isScriptLoaded: true
    });

    if (!window.CKEDITOR) {
      console.error("Editor not found");
      return;
    }

    this.addPlugins()
    this.editorInstance = window.CKEDITOR.appendTo(
      ReactDOM.findDOMNode(this),
      {config: {
        removePlugins: 'toolbar'
      }},
      this.props.content,
    );
    console.log(this.editorInstance)
    console.log('config', this.state.config)
    //Register listener for custom events if any
    for(var event in this.props.events){
      var eventHandler = this.props.events[event];

      this.editorInstance.on(event, eventHandler);
    }
  }

  addPlugins = () => {
    window.CKEDITOR.inline( 'editor1', {
			// Allow some non-standard markup that we used in the introduction.
			extraAllowedContent: 'a(documentation);abbr[title];code',
			removePlugins: 'stylescombo',
			extraPlugins: 'sourcedialog',
			// Show toolbar on startup (optional).
			startupFocus: true
		});
  }

  handleClick = () => {
    let currentEditor = Object.keys(window.CKEDITOR.instances)[0]
    // destroy current editor to add new configuration
    window.CKEDITOR.instances[currentEditor].destroy()
    // let pluginValue = this.setToolbarValue()
    // this.setState({
    //   config: {
    //     removePlugins: pluginValue
    //   }}, function() {this.buildToolbar()})
  }

  // setToolbarValue = () => {
  //   return this.state.config.removePlugins === '' ? 'toolbar' : ''
  // }
  //
  // buildToolbar = () => {
  //   this.editorInstance = window.CKEDITOR.appendTo(
  //     ReactDOM.findDOMNode(this),
  //     this.state.config,
  //     this.props.content
  //   )
  // }

  render() {
    return(
      <div>
        <PlusIcon handleClick={this.handleClick}/>
        <div className="editor" id="introduction" contentEditable="true"
        ></div>
      </div>
    );
  }
}

Editor.defaultProps = {
  content: "",
  config: {
    removePlugins: 'toolbar'
  },
  isScriptLoaded: false,
  scriptUrl: defaultScriptUrl,
  activeClass: "composition-editor",
  events: {
            "blur": this.onBlur
          }
};

Editor.propTypes = {
  content: PropTypes.any,
  config: PropTypes.object,
  isScriptLoaded: PropTypes.bool,
  scriptUrl: PropTypes.string,
  activeClass: PropTypes.string,
  events: PropTypes.object
};

export default Editor;
