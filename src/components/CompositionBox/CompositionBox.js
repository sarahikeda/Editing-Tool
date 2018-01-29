import React, { Component } from 'react';
import Summary from '../Summary/Summary';
import Title from '../Title/Title';
import Editor from '../Editor/Editor';
import Tags from '../Tags/Tags';
import Signature from '../Signature/Signature';

class CompositionBox extends Component {

  render() {
    return (
      <div className="composition-box col-xs-6 col-md-6 col-lg-6">
        <Summary/>
        <Title/>
        <Editor title="Focus Items"/>
        <Tags/>
        <Signature/>
      </div>
    );
  }
}

export default CompositionBox;
