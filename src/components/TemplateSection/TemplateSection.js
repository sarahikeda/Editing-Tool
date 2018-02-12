import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
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
      <div className="template-section">
        <p className="template-section-name">Drafts</p>
        <Row>
          <TemplateBox class="drafts"/>
          <TemplateBox class="drafts"/>
          <TemplateBox class="drafts"/>
          <TemplateBox class="drafts"/>
        </Row>
        <Row>
          <TemplateBox class="drafts"/>
          <TemplateBox class="drafts"/>
          <TemplateBox class="drafts"/>
          <TemplateBox class="drafts"/>
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
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
          </Row>
          <Row>
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
            <TemplateBox class="drafts"/>
          </Row>
        </div>
        <p className="template-section-name">All Templates</p>
        <Row>
          <TemplateBox class="all-templates"/>
          <TemplateBox class="all-templates"/>
          <TemplateBox class="all-templates"/>
          <TemplateBox class="all-templates"/>
        </Row>
        <Row>
          <TemplateBox class="all-templates"/>
          <TemplateBox class="all-templates"/>
          <TemplateBox class="all-templates"/>
          <TemplateBox class="all-templates"/>
        </Row>
        <div class="expand-chevron">
          <FontAwesomeIcon
            className="expand-chevron"
            icon="chevron-down"
            onClick={() => this.setState({ openAll: !this.state.openAll })}
          />
        <div className={"collapse" + (this.state.openAll ? ' in' : '')}>
            <Row>
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
            </Row>
            <Row>
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
              <TemplateBox class="all-templates"/>
            </Row>
          </div>
      </div>
        <p className="template-section-name">Standard Templates</p>
        <Row>
          <TemplateBox class="all-templates"/>
          <TemplateBox class="all-templates"/>
        </Row>
        <p className="template-section-name">My Templates</p>
        <Row>
          <TemplateBox class="all-templates"/>
          <TemplateBox class="all-templates"/>
        </Row>
      </div>
    );
  }
}

export default TemplateSection;
