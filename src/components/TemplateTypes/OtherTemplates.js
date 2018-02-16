import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TemplateBox from '../TemplateBox/TemplateBox';

class OtherTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrafts: false,
      openAll: false
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates" />
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates" />
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates" />
            <TemplateBox
              handleClick={this.props.handleClick}
              class="all-templates" />
          </Col>

          <Col className="template-columns" xs="3">
            <TemplateBox
              personalTemplate={true}
              removeTemplate={this.props.removeTemplate}
              handleClick={this.props.handleClick}
              class="my-templates" />
            <TemplateBox
              personalTemplate={true}
              removeTemplate={this.props.removeTemplate}
              handleClick={this.props.handleClick}
              class="my-templates" />
          </Col>
          <Col className="template-columns" xs="3">
            <TemplateBox
              personalTemplate={true}
              removeTemplate={this.props.removeTemplate}
              handleClick={this.props.handleClick}
              class="my-templates" />
            <TemplateBox
              personalTemplate={true}
              removeTemplate={this.props.removeTemplate}
              handleClick={this.props.handleClick}
              class="my-templates" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default OtherTemplates;
