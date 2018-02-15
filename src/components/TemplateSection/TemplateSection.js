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
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="drafts"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="drafts"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="drafts"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="drafts"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="drafts"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="drafts"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="drafts"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="drafts"/>
          </Col>
        </Row>
        <div className="expand-chevron">
          <FontAwesomeIcon
            className="expand-chevron"
            icon="chevron-down"
            onClick={() => this.setState({ openDrafts: !this.state.openDrafts })}
          />
        </div>
        <div className={"collapse" + (this.state.openDrafts ? ' in' : '')}>
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
        <Row>
           <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates"/>
          </Col>
          <Col className="template-columns"xs="3">
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
              class="my-templates"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="my-templates"/>
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="my-templates"/>
            <TemplateBox
              handleClick={this.props.handleClick}
              class="my-templates"/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TemplateSection;
