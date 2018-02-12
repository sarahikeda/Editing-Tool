import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CompositionHeader from '../CompositionHeader/CompositionHeader';
import Editor from '../Editor/Editor';
import Summary from '../Summary/Summary';
import Tags from '../Tags/Tags';
import Signature from '../Signature/Signature';

class CompositionBox extends Component {
  state = {
    tags: []
  }

  addTagHandler = event => {
    if(event.charCode === 13) {
      const tags_Coll = [...this.state.tags]
      if(event.target.value.trim() !== ""){
        tags_Coll.push(event.target.value)
        this.setState({tags: tags_Coll})
        event.target.value = "";
      }
    }
  }

  removeTagHandler = (_id) => {
    const tags_Coll = [...this.state.tags];
    tags_Coll.splice(_id, 1);
    this.setState({tags: tags_Coll})
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.tags !== this.state.tags
  }

  render() {
    return (
      <Container className="composition-box">
        <Row>
          <Col>
            <div className="content">
              <CompositionHeader/>
              <Editor title="Focus Items"/>
              <Signature/>
            </div>
            <Summary/>
            <Tags add={this.addTagHandler.bind(this)} remove={this.removeTagHandler.bind(this)} tags={this.state.tags}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CompositionBox;
