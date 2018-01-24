import React, { Component } from 'react';
import Summary from '../Summary/Summary';
import Title from '../Title/Title';
import Sandbox from '../Sandbox/Sandbox';
import Tags from '../Tags/Tags';
import Signature from '../Signature/Signature';

class CompositionBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="composition-box">
        <Summary/>
        <Title/>
        <Sandbox/>
        <Tags/>
        <Signature/>
      </div>
    );
  }
}

export default CompositionBox;
