import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="navigation-bar">
       <Navbar.Header>
         <Navbar.Brand>
           <div className="nav-img"></div>
         </Navbar.Brand>
       </Navbar.Header>
    </Navbar>
    );
  }
}

export default NavigationBar;
