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
        <NavItem eventKey={1} href="#">Save as Template</NavItem>
        <NavItem eventKey={1} href="#" className="delete-link">Delete</NavItem>
        <NavDropdown eventKey={3} title="Template" id="navigation-dropdown">
          <div className="row template-articles">
            <RecentDocs/>
          </div>
        </NavDropdown>
        <NavDropdown eventKey={3} title="Drafts" id="draft-options">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
        </NavDropdown>
        <NavItem eventKey={1} href="#">Content</NavItem>
        <Button className="publish-button">
          <span className="add-user-icon"><FontAwesome name='user-plus'/></span>
          Publish
        </Button>
      </Nav>
    </Navbar>
    );
  }
}

export default NavigationBar;
