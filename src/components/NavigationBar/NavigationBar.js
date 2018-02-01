// import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';

// class NavigationBar extends Component {
//   render() {
//     return (
//       <Navbar className="navigation-bar">
//        <Navbar.Header>
//        </Navbar.Header>
//     </Navbar>
//     );
//   }
// }

// export default NavigationBar;


import React, { Component } from 'react';
import Logo from '../../images/logo.png';
import './NavigationBar.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          
          <NavbarToggler onClick={this.toggle} />
          
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  New From Template
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Open Draft
                </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem> */}
                    <div className="d-flex flex-wrap justify-content-start">
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                      <DropdownItem className="item-container"><div className="item"></div></DropdownItem>
                    </div>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
          </Collapse>


          <NavbarBrand href="/">
            <img className="logo" alt="Citi Logo" src={Logo} />
          </NavbarBrand>

        </Navbar>
      </div>
    );
  }
}