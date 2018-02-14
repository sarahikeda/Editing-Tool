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
      <div className="template-section container">
        <p className="template-section-name">Drafts</p>
        <Row>
          <TemplateBox className="drafts"/>
          <TemplateBox className="drafts"/>
          <TemplateBox className="drafts"/>
          <TemplateBox className="drafts"/>
        </Row>
        <Row>
          <TemplateBox className="drafts"/>
          <TemplateBox className="drafts"/>
          <TemplateBox className="drafts"/>
          <TemplateBox className="drafts"/>
        </Row>
        <div class="expand-chevron">
          <FontAwesomeIcon
            className="expand-chevron"
            icon="chevron-down"
            onClick={() => this.setState({ openDrafts: !this.state.openDrafts })}
          />
      </div>
        <div className={"collapse" + (this.state.openDrafts ? ' in' : '')}>
          <Row>
            <TemplateBox className="drafts"/>
            <TemplateBox className="drafts"/>
            <TemplateBox className="drafts"/>
            <TemplateBox className="drafts"/>
          </Row>
          <Row>
            <TemplateBox className="drafts"/>
            <TemplateBox className="drafts"/>
            <TemplateBox className="drafts"/>
            <TemplateBox className="drafts"/>
          </Row>
        </div>
        <p className="template-section-name">All Templates</p>
        <Row>
          <TemplateBox className="all-templates" personalTemplate={true} />
          <TemplateBox className="all-templates"/>
          <TemplateBox className="all-templates"/>
          <TemplateBox className="all-templates"/>
        </Row>
        <Row>
          <TemplateBox className="all-templates"/>
          <TemplateBox className="all-templates"/>
          <TemplateBox className="all-templates"/>
          <TemplateBox className="all-templates"/>
        </Row>
        <div className="expand-chevron">
          <FontAwesomeIcon
            className="expand-chevron"
            icon="chevron-down"
            onClick={() => this.setState({ openAll: !this.state.openAll })}
          />
          <div className={"collapse" + (this.state.openAll ? ' in' : '')}>
            <Row>
              <TemplateBox className="all-templates"/>
              <TemplateBox className="all-templates"/>
              <TemplateBox className="all-templates"/>
              <TemplateBox className="all-templates"/>
            </Row>
            <Row>
              <TemplateBox className="all-templates"/>
              <TemplateBox className="all-templates"/>
              <TemplateBox className="all-templates"/>
              <TemplateBox className="all-templates"/>
            </Row>
          </div>
        </div>
        <Row >
          <Col className="extra-templates" lg="6">
            <span className="template-section-name">Standard Templates</span>
            <TemplateBox className="all-templates"/>
            <TemplateBox className="all-templates"/>
          </Col>
          <Col className="extra-templates" lg="6">
            <span className="template-section-name">My Templates</span>
            <TemplateBox className="my-templates"/>
            <TemplateBox className="my-templates"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TemplateSection;
