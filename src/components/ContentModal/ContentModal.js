import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class ContentModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggle}
        className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}></ModalHeader>
        <ModalBody>
          <form className="form-inline">
            <div className="form-group">
              <label className="template-prompt">Template Name</label>
              <input
                type="text"
                className="form-control"
                onChange={this.props.onChangeValue}>
              </input>
            </div>
            <Button
              type="submit"
              className="template-save btn btn-primary"
              onClick={this.props.handleFileSave}>
              Save Template
            </Button>

          </form>

        </ModalBody>
      </Modal>
    );
  }
}
