import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TemplateBox from '../TemplateBox/TemplateBox';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import MyTemplateData from '../../myTemplateData.json';

class MyTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrafts: false,
      openAll: false
    };
  }

  retrieveMyTemplates = () => {
    // API call: /ecmct/template/list-my?ssoId=nj04730
    return MyTemplateData.content
  }

  render() {
    const myTemplates = this.retrieveMyTemplates().map(templates => {
      return (
        <TemplateBox
          handleClick={this.props.handleClick}
          class="drafts"
          isStandard={templates.isStandard}
          templateName={templates.title} />
      )
    })

    return (
      <div>
        <Container>
          <p className="template-section-name">My Templates</p>
          <Row>
            {myTemplates}
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
              {myTemplates}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default MyTemplates;
