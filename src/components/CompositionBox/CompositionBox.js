import React, { Component } from 'react';
import Summary from '../Summary/Summary';
import Title from '../Title/Title';
import Editor from '../Editor/Editor';
import Tags from '../Tags/Tags';
import Signature from '../Signature/Signature';

class CompositionBox extends Component {

  render() {
    return (
      <div className="composition-box col-xs-6">
        <Title/>
        <Editor title="Focus Items"/>
        <Signature/>
        <Summary/>
        <Tags/>
      </div>
    );
  }
}

export default CompositionBox;
