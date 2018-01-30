import React, { Component } from 'react';
import CompositionHeader from '../CompositionHeader/CompositionHeader';
import QuickLinks from '../QuickLinks/QuickLinks';
import Editor from '../Editor/Editor';
import Summary from '../Summary/Summary';
import Tags from '../Tags/Tags';
import Signature from '../Signature/Signature';

class CompositionBox extends Component {

  render() {
    return (
      <div className="composition-box col-xs-6">
        <CompositionHeader/>
        <div className="content">
          <QuickLinks/>
          <Editor title="Focus Items"/>
          <Signature/>
          <Summary/>
          <Tags/>
        </div>
      </div>
    );
  }
}

export default CompositionBox;
