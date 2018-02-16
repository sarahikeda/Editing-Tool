import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TemplateBox from '../TemplateBox/TemplateBox';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class DraftTemplates extends Component {
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
        <Container>
          <p className="template-section-name">Drafts</p>
          <Row>
            <Col className="template-columns" xs="3">
              <TemplateBox
                personalTemplate={true}
                handleClick={this.props.handleClick}
                removeTemplate={this.props.removeTemplate}
                class="drafts"/>
              <TemplateBox
                personalTemplate={true}
                handleClick={this.props.handleClick}
                class="drafts"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox
                personalTemplate={true}
                handleClick={this.props.handleClick}
                class="drafts"/>
              <TemplateBox
                personalTemplate={true}
                handleClick={this.props.handleClick}
                class="drafts"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox
                personalTemplate={true}
                handleClick={this.props.handleClick}
                class="drafts"/>
              <TemplateBox
                personalTemplate={true}
                handleClick={this.props.handleClick}
                class="drafts"/>
            </Col>
            <Col className="template-columns" xs="3">
              <TemplateBox
                personalTemplate={true}
                handleClick={this.props.handleClick}
                class="drafts"/>
              <TemplateBox
                personalTemplate={true}
                handleClick={this.props.handleClick}
                class="drafts"/>
            </Col>
          </Row>
        </Container>
        <div className="expand-chevron">
          <FontAwesomeIcon
            className="expand-chevron"
            icon="chevron-down"
            onClick={() => this.setState({ openDrafts: !this.state.openDrafts })}
          />
        </div>
        <div className={"collapse" + (this.state.openDrafts ? ' in' : '')}>
          <Container>
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
          </Container>
        </div>
      </div>
    );
  }
}

export default DraftTemplates;
