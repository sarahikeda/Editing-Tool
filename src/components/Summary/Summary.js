import React, { Component } from 'react';

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
        <p className="current-date">{this.state.currentDate}</p>
      </div>
    );
  }
}

export default Summary;
