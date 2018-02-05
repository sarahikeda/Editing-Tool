import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CompositionHeader from '../CompositionHeader/CompositionHeader';
import QuickLinks from '../QuickLinks/QuickLinks';
import Editor from '../Editor/Editor';
import Summary from '../Summary/Summary';
import Tags from '../Tags/Tags';
import Signature from '../Signature/Signature';

class CompositionBox extends Component {
  render() {
    return (
      <Container className="composition-box">
        <Row>
          <Col>
            <CompositionHeader/>
            <div className="content">
              <QuickLinks/>
              <Editor title="Focus Items"/>
              <Signature/>
              <Summary/>
              <Tags/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CompositionBox;
