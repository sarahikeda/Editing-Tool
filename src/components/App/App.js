import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import CompositionBox from '../CompositionBox/CompositionBox';
import ResearchContent from '../ResearchContent/ResearchContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar/>
        </header>
        <div className="container">
          <div className="row">
            <CompositionBox/>
            <ResearchContent/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
