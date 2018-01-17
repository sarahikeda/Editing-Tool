import React, { Component } from 'react';
import PlusCircle from '../../images/plus-circle-outline.png'

class PlusIcon extends Component {
  render() {
    return (
      <div className="plus-icon">
        <img className="plus-circle" src={PlusCircle} alt="plus-circle" onClick={this.props.handleClick} />
      </div>
    );
  }
}

export default PlusIcon;
/*removePlugins: 'clipboard, toolbar'*/
