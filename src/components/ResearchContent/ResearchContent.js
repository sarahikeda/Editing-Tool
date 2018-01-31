import React, { Component } from 'react';

class ResearchContent extends Component {
  render() {
    return (
      <div className="research-content col-xs-6">
        <h5 className="research-title">RESEARCH CONTENT</h5>

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div id="imaginary_container">
                <div className="input-group stylish-input-group">
                  <input type="text" className="form-control"  placeholder="Search" ></input>
                    <span className="input-group-addon">
                      <button type="submit">
                        <span className="glyphicon glyphicon-search"></span>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

    );
  }
}

export default ResearchContent;
