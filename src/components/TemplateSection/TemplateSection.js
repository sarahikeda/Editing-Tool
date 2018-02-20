import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DraftTemplates from '../TemplateTypes/DraftTemplates';
import RecentTemplates from '../TemplateTypes/RecentTemplates';
import StandardTemplates from '../TemplateTypes/StandardTemplates';
import MyTemplates from '../TemplateTypes/MyTemplates';

class TemplateSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDrafts: false,
      openAll: false
    };
  }

  removeTemplate = () => {
    console.log('removal underway')
    // make call to api with template id number to delete api
    // re-render the templates
  }


  render() {
    return (
      <div className="template-section">

        <div className="template-container">
          <DraftTemplates
            removeTemplate={this.removeTemplate}
            handleClick={this.props.handleClick}/>
          <RecentTemplates
              removeTemplate={this.removeTemplate}
              handleClick={this.props.handleClick}/>
          <Row>
            <Col className="template-columns" xs="6">
              <StandardTemplates
                handleClick={this.props.handleClick}
                removeTemplate={this.removeTemplate}/>
            </Col>
            <Col>
              <MyTemplates
                handleClick={this.props.handleClick}
                removeTemplate={this.removeTemplate}/>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default TemplateSection;
