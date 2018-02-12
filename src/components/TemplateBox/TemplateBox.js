import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class TemplateBox extends Component {
  constructor(props) {
    super(props);
  }

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
