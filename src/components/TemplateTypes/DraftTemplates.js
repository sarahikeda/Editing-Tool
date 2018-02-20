import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TemplateBox from '../TemplateBox/TemplateBox';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import DraftTemplateData from '../../draftTemplateData.json';

class DraftTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrafts: false,
      openAll: false
    };
  }

  retrieveDraftTemplates = () => {
    // API call: /ecmct/draft/list?ssoId=nj04730
    return DraftTemplateData.content
  }

  render() {
    const draftTemplates = this.retrieveDraftTemplates().map(templates => {
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
          <p className="template-section-name">Drafts</p>
          <Row>
            {draftTemplates}
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
              {draftTemplates}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default DraftTemplates;
