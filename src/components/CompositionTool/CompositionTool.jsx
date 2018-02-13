import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CompositionBox from '../CompositionBox/CompositionBox';
import ResearchContent from '../ResearchContent/ResearchContent';

import fontawesome from '@fortawesome/fontawesome'
import { faCog, faSpinner, faTimesCircle, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid';


fontawesome.library.add( faCog, faSpinner, faTimesCircle, faSquare, faCheckSquare )

class CompositionTool extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col lg="7">
            <CompositionBox/>
          </Col>
          <Col lg="5" className="{classes.initial-recent-section}">
            <ResearchContent/>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default CompositionTool;
