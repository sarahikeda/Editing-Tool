import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import CompositionBox from '../CompositionBox/CompositionBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar/>
        </header>
        <p className="auto-save-text">Your composition is auto saved</p>
        <CompositionBox/>
      </div>
    );
  }
}

export default App;
