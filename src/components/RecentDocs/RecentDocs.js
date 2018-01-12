import React, { Component } from 'react';

class RecentDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: ['Ubers losses widen as softbank', 'American Air doesnt have', 'Ubers losses widen as softbank', 'American Air doesnt have']
    }
  }

  render() {
    return (
      <div className="recent-docs">
        <div className="col-xs-4">
          <div className="template-image"></div>
          <p className="template-title">Uber's losses widen as softbank...</p>
          <p className="template-date">Nov 29</p>
        </div>
        <div className="col-xs-4">
          <div className="template-image"></div>
          <p className="template-title">American Air doesn't have...</p>
          <p className="template-date">Nov 29</p>
        </div>
        <div className="col-xs-4">
          <div className="template-image"></div>
          <p className="template-title">Uber's losses widen as softbank...</p>
          <p className="template-date">Nov 29</p>
        </div>
      </div>
    );
  }
}

export default RecentDocs;
