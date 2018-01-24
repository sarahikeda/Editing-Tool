import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import RecentDocs from '../RecentDocs/RecentDocs';
var FontAwesome = require('react-fontawesome');

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="navigation-bar">
       <Navbar.Header>
         <Navbar.Brand>
           <div className="nav-img"></div>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav>
        <NavItem eventKey={1} href="#" className="delete-link">Global Technology Daily</NavItem>
      </Nav>
    </Navbar>
    );
  }
}

export default NavigationBar;
