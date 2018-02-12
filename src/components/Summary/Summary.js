import React, { Component } from 'react';
import { Input } from 'reactstrap';

class Summary extends Component {
  render() {
    return (
      <div className="summary content">
        <p className="section-title">Summary<span className="section-description"> (Displayed in velocity and digest emails)</span></p>
        
        <Input type="textarea" name="summaryText" id="summaryText" className="summary-text" placeholder="Type our summary..." />
      </div>
    );
  }
}

export default Summary;
