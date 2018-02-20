import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TemplateBox from '../TemplateBox/TemplateBox';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import StandardTemplateData from '../../standardTemplateData.json';

class StandardTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrafts: false,
      openAll: false
    };
  }

  retrieveStandardTemplates = () => {
    // API call: /ecmct/template/list-standard?ssoId=nj04730
    return StandardTemplateData.content
  }

  render() {
    const standardTemplates = this.retrieveStandardTemplates().map(templates => {
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
          <p className="template-section-name">Standard Templates</p>
          <Row>
            {standardTemplates}
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
              <Col className="template-columns" xs="6">
                {standardTemplates}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default StandardTemplates;
