import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
const loadScript = require('load-script');

var defaultScriptUrl = "https://cdn.ckeditor.com/4.6.2/standard/ckeditor.js";

/**
 * @author codeslayer1
 * @description Editor component to render a Editor textarea with defined configs and all Editor events handler
 */
class Editor extends React.Component {
  constructor(props) {
    super(props);
    //State initialization
    this.state = {
      isScriptLoaded: this.props.isScriptLoaded,
      config: this.props.config
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

    this.editorInstance = window.CKEDITOR.appendTo(
      ReactDOM.findDOMNode(this),
      this.state.config,
      this.props.content
    );

    //Register listener for custom events if any
    for(var event in this.props.events){
      var eventHandler = this.props.events[event];

      this.editorInstance.on(event, eventHandler);
    }
  }

  render() {
    return <div className={this.props.activeClass} />;
  }
}

Editor.defaultProps = {
  content: "",
  config: {},
  isScriptLoaded: false,
  scriptUrl: defaultScriptUrl,
  activeClass: "",
  events: {}
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
