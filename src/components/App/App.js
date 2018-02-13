import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import PublishBar from '../PublishBar/PublishBar';
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
        </header>
      </div>
    );
  }
}
export default App;
