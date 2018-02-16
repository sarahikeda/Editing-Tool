import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export default class ContentModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggle}
        className={this.props.className}>
        <ModalHeader toggle={this.props.toggle}>Save Template</ModalHeader>
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
              size="sm"
              className="ml-2 btn"
              onClick={this.props.handleFileSave}>
              Save
            </Button>

          </form>

        </ModalBody>
      </Modal>
    );
  }
}
