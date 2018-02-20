import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import TemplateBox from '../TemplateBox/TemplateBox';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import RecentTemplateData from '../../recentTemplateData.json';

class RecentTemplates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrafts: false,
      openAll: false
    };
  }


    retrieveRecentTemplates = () => {
      // API call: /ecmct/template/list-recent?ssoId=nj04730
      return RecentTemplateData.content
    }

  render() {
    const recentTemplates = this.retrieveRecentTemplates().map(templates => {
      return (
        <TemplateBox
          handleClick={this.props.handleClick}
          class="all-templates"
          isStandard={templates.isStandard}
          templateName={templates.title} />
      )
    })

    return (
      <div>
        <Container>
          <p className="template-section-name">All Templates</p>
          <p>Recently Opened</p>
          <Row>
            {recentTemplates}
          </Row>
        </Container>
        <div className="expand-chevron">
          <FontAwesomeIcon
            className="expand-chevron"
            icon="chevron-down"
            onClick={() => this.setState({ openAll: !this.state.openAll })}
          />
        </div>
        <div className={"collapse" + (this.state.openAll ? ' in' : '')}>
          <Container>
            <Row>
                  {recentTemplates}
              </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default RecentTemplates;
