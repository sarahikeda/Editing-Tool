import React, { Component } from 'react';
import Summary from '../Summary/Summary';
import Title from '../Title/Title';
import PlusIcon from '../PlusIcon/PlusIcon';
import Sandbox from '../Sandbox/Sandbox';
import Tags from '../Tags/Tags';
import Signature from '../Signature/Signature';

class CompositionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: ['Ubers losses widen as softbank', 'American Air doesnt have', 'Ubers losses widen as softbank', 'American Air doesnt have']    }
  }

  render() {
    return (
      <div className="composition-box">
        <Summary/>
        <Title/>
        <PlusIcon/>
        <Sandbox documents={this.state.documents}/>
        <Tags/>
        <Signature/>
      </div>
    );
  }
}

export default CompositionBox;
