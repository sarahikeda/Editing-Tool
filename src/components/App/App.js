import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavigationBar from '../NavigationBar/NavigationBar';
import CompositionBox from '../CompositionBox/CompositionBox';
import ResearchContent from '../ResearchContent/ResearchContent';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className="{classes.App}">
        <header className="{classes.App-header}">
          <NavigationBar/>
        </header>
        <Container fluid>
          <Row>

            <Col>
              <CompositionBox/> 
            </Col>

            <Col className="{classes.initial-recent-section}">
              <ResearchContent/> 
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
