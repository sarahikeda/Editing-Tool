import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
const loadScript = require('load-script');

class CKEditor extends React.Component {
  constructor(props) {
    super(props);

    //State initialization
    this.state = {
      isScriptLoaded: this.props.isScriptLoaded,
      config: this.props.config,
      anchors: ''
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

  getEditorContent = () =>  {
    let editorData = window.CKEDITOR.instances["editor1"].getData()
    let regExp = /<h1>(.*)<\/h1>/;
    // iterate through all the h1s and add one div with the h1 names on top
    if (editorData.match(/<h1>(.*)<\/h1>/g)) {
      let sections = editorData.match(/<h1>(.*)<\/h1>/g)

      this.setState({
        anchors: sections.map((section) =>
                              section.replace(/<h1>/,"").replace(/<\/h1>/,"")
                            )
      })
      console.log("anchors", this.state.anchors)
      // remove existing anchors
      console.log('editor data', editorData)
      let dataWithLinks = "<div id='quick-links'><p>" + this.state.anchors + "</p></div>" + editorData
      window.CKEDITOR.instances['editor1'].setData(dataWithLinks)
    }
  }

  setAnchors = (match) => {
    this.setState({
      anchors: match
    });
    // if it is a h1 match then make it a link with an id
  }

  onLoad = () => {
    if (this.unmounting) return;

    this.setState({
      isScriptLoaded: true
    });

    if (!window.CKEDITOR) {
      console.error("CKEditor not found");
      return;
    }

    this.editorInstance = window.CKEDITOR.appendTo(
      ReactDOM.findDOMNode(this),
      this.props.content
    );

    this.editorInstance.on('key', () => {
      let match = this.getEditorContent()
      this.setAnchors(match)
    });
  }


  render() {
    return (
      <div>
        <h5 className="editor-title">{this.props.title}</h5>
      </div>
    );
  }
}

CKEditor.defaultProps = {
  content: "",
  config: {},
  isScriptLoaded: false,
  scriptUrl: 'http://sarahikeda.github.io/ckeditor/ckeditor.js',
  activeClass: "",
  events:{}
};

CKEditor.propTypes = {
  content: PropTypes.any,
  config: PropTypes.object,
  isScriptLoaded: PropTypes.bool,
  scriptUrl: PropTypes.string,
  activeClass: PropTypes.string,
  events: PropTypes.object
};

export default CKEditor;
