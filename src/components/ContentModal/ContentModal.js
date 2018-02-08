import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ContentModal extends Component {
    render() {
      return (
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>HTML from Editor</ModalHeader>
          <ModalBody>
            {this.props.editorContent}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      );
    }
}
