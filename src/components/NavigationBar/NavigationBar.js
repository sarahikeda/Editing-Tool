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
import TemplateSection from '../TemplateSection/TemplateSection';
import CompositionTool from '../CompositionTool/CompositionTool';

import React, { Component } from 'react';
import Logo from '../../images/logo.png';

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
      isOpen: false,
      showTemplate: true,
      showComposition: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick = () => {
    this.setState({
      showTemplate: !this.state.showTemplate,
      showComposition: !this.state.showComposition
    })
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

                  </DropdownItem>
                  <DropdownItem>

                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Open Draft
                </DropdownToggle>
                <DropdownMenu>
                    <div className="d-flex flex-wrap justify-content-start template-container">
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
        {this.state.showTemplate && <TemplateSection handleClick={this.handleClick}/>}
        {this.state.showComposition && <CompositionTool/>}
      </div>
    );
  }
}
