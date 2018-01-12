import React, { Component } from 'react';

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <p><span className="section-title">Summary </span><span className="section-explanation">(For display in velocity and digest emails)</span></p>
        <textarea className="summary-text" placeholder="Type your summary here..."></textarea>
      </div>
    );
  }
}

export default Summary;
