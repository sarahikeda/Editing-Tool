import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import TemplateBox from '../TemplateBox/TemplateBox';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class TemplateSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrafts: false,
      openAll: false
    };
  }
  render() {
    return (
      <div class="template-section container">
        <p class="template-section-name">Drafts</p>
        <Row>
          <Col className="template-columns" xs="3">
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
          </Col>
        </Row>
        <div class="expand-chevron">
          <FontAwesomeIcon
            class="expand-chevron"
            icon="chevron-down"
            onClick={() => this.setState({ openDrafts: !this.state.openDrafts })}
          />
        </div>
        <div class={"collapse" + (this.state.openDrafts ? ' in' : '')}>
          <Row>
            <Col className="template-columns" xs="3">
              <TemplateBox class="drafts"/>
              <TemplateBox class="drafts"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox class="drafts"/>
              <TemplateBox class="drafts"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox class="drafts"/>
              <TemplateBox class="drafts"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox class="drafts"/>
              <TemplateBox class="drafts"/>
            </Col>
          </Row>
        </div>
        <p class="template-section-name">All Templates</p>
        <Row>
          <Col className="template-columns" xs="3">
            <TemplateBox class="all-templates"/>
            <TemplateBox class="all-templates"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox class="all-templates"/>
            <TemplateBox class="all-templates"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox class="all-templates"/>
            <TemplateBox class="all-templates"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox class="all-templates"/>
            <TemplateBox class="all-templates"/>
          </Col>
        </Row>
        <div class="expand-chevron">
          <FontAwesomeIcon
            class="expand-chevron"
            icon="chevron-down"
            onClick={() => this.setState({ openAll: !this.state.openAll })}
          />
        </div>
        <div class={"collapse" + (this.state.openAll ? ' in' : '')}>
          <Row>
            <Col className="template-columns" xs="3">
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
            </Col>
          </Row>
        </div>
        <Row>
           <Col className="template-columns" xs="3">
            <TemplateBox class="all-templates"/>
            <TemplateBox class="all-templates"/>
          </Col>
          <Col className="template-columns"xs="3">
            <TemplateBox class="all-templates"/>
            <TemplateBox class="all-templates"/>
          </Col>
           <Col className="template-columns" xs="3">
            <TemplateBox class="my-templates"/>
            <TemplateBox class="my-templates"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox class="my-templates"/>
            <TemplateBox class="my-templates"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TemplateSection;
