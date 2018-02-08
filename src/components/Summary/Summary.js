import React, { Component } from 'react';

class Summary extends Component {
  render() {
    return (
      <div className="summary content">
        <p className="section-title">Summary<span className="section-description"> (Displayed in velocity and digest emails)</span></p>
        <div className="summary-text" contentEditable>Type your summary...</div>
      </div>
    );
  }
}

export default Summary;
