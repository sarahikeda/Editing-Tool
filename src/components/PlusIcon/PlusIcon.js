import React, { Component } from 'react';
import PlusCircle from '../../images/plus-circle-outline.png'

class PlusIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    }
  }

  handleClick = () => {
    console.log('hi')
    this.setState({
      showComponent: true,
    })
  }

  render() {
    return (
      <div className="plus-icon">
        <img className="plus-circle" src={PlusCircle} alt="plus-circle" onClick={this.handleClick} />
        {this.state.showComponent ? 'hi' : null }
      </div>
    );
  }
}

export default PlusIcon;
