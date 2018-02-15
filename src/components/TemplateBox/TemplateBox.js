import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class TemplateBox extends Component {
  render() {
    return (
      <div className={"template-box " + this.props.class}>
        <FontAwesomeIcon
          className="close-circle"
          icon="times-circle"
        />
        <p className="template-title">Global Daily-Custom</p>
        <p>Last opened: Nov 26, 2017</p>
      </div>
    );
  }
}

export default TemplateBox;
