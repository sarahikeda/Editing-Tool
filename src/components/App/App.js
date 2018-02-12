import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import PublishBar from '../PublishBar/PublishBar';
import CompositionBox from '../CompositionBox/CompositionBox';
import ResearchContent from '../ResearchContent/ResearchContent';

import fontawesome from '@fortawesome/fontawesome'
import { faCog, faSpinner, faTimesCircle, faSquare, faCheckSquare } from '@fortawesome/fontawesome-free-solid';

import classes from './App.css';

fontawesome.library.add( faCog, faSpinner, faTimesCircle, faSquare, faCheckSquare )

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className="{classes.App-header}">
          <NavigationBar/>
          <PublishBar/>
        </header>
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
      </div>
    );
  }
}
export default App;
