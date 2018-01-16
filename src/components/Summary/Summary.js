import React, { Component } from 'react';
import CitiLogo from '../../images/citilogo.png'

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: ''
    }
  }

  getCurrentDate = () => {
    let today = new Date().toString();
    return today.split(" ").slice(0,4).join(" ");
  }

  componentDidMount() {
    this.setState({
      currentDate: this.getCurrentDate()
    })
  }

  render() {
    return (
      <div className="summary">
        <img className="citi-logo" src={CitiLogo} alt="citi-logo" />
        <p className="current-date">{this.state.currentDate}</p>
      </div>
    );
  }
}

export default Summary;
