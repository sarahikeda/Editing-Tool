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
    var editorData = window.CKEDITOR.instances["editor1"].getData()
    var regExp = /<h1>(.*)<\/h1>/;
    // iterate through all the h1s and add one div with the h1 names on top
    if (editorData.match(/<h1>(.*)<\/h1>/g)) {
      var sections = editorData.match(/<h1>(.*)<\/h1>/g)
      // get all the text within h1
debugger
      this.setState({
        anchors: sections
      });

      console.log(this.state.anchors)
      this.state.anchors.map((section) =>
        console.log('hi')
      )
      var dataWithLinks = "<p>" + this.state.anchors + "</p>" + editorData
      window.CKEDITOR.instances['editor1'].setData(dataWithLinks)

    } else {
      return ''
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
      var match = this.getEditorContent()
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
