import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TemplateBox from '../TemplateBox/TemplateBox';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class AllTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrafts: false,
      openAll: false
    };
  }

  render() {
    return (
      <div>
        <p className="template-section-name">All Templates</p>
        <Row>
          <Col className="template-columns" xs="3">
            <TemplateBox handleClick={this.props.handleClick} class="all-templates"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates"/>
            <TemplateBox
              handleClick={this.props.handleClick} class="all-templates"/>
          </Col>
        </Row>
        <div className="expand-chevron">
          <FontAwesomeIcon
            className="expand-chevron"
            icon="chevron-down"
            onClick={() => this.setState({ openAll: !this.state.openAll })}
          />
        </div>
        <div className={"collapse" + (this.state.openAll ? ' in' : '')}>
          <Row>
            <Col className="template-columns" xs="3">
              <TemplateBox
                handleClick={this.props.handleClick}
                class="all-templates"/>
              <TemplateBox
                handleClick={this.props.handleClick}
                class="all-templates"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox
                handleClick={this.props.handleClick}
                class="all-templates"/>
              <TemplateBox
                handleClick={this.props.handleClick}
                class="all-templates"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox
                handleClick={this.props.handleClick}
                class="all-templates"/>
              <TemplateBox
                handleClick={this.props.handleClick}
                class="all-templates"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox
                handleClick={this.props.handleClick}
                class="all-templates"/>
              <TemplateBox
                handleClick={this.props.handleClick}
                class="all-templates"/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default AllTemplates;
