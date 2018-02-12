import React, { Component } from 'react';
import { Input } from 'reactstrap';
import TagItem from './TagItem';

class Tags extends Component {
  state = {
    tags: []
  }

  removeTag(_indx) {
    this.props.remove(_indx)
  }

  render() {
    let tags_Coll = this.props.tags.map((_tag, index) => {
        return <TagItem key={`${_tag}_${index}`} name={_tag} click={() => this.removeTag(index)}/>
      }
    )
    return (
      <div className="tags content">
        <p className="section-title">Tags</p>
        <Input type="text" name="tags" id="tags" placeholder="Add content tags..." 
          style={{'width': '100%'}} 
          onKeyPress={this.props.add}/>
        <div className="d-flex mt-1 flex-wrap justify-content-start align-items-start">
          {tags_Coll}
        </div>
      </div>
    );
  }
}

export default Tags;
