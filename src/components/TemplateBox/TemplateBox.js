import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class TemplateBox extends Component {

  render() {
    return (
      <div className={"template-box " + this.props.class}>
        {!this.props.isStandard && <FontAwesomeIcon
          onClick={this.props.removeTemplate}
          className="close-circle"
          icon="times-circle"
        />}
        <div onClick={this.props.handleClick}>
          <p className="template-title">{this.props.templateName}</p>
          <p>Last opened: Nov 26, 2017</p>
        </div>
      </div>
    );
  }
}

export default TemplateBox;
