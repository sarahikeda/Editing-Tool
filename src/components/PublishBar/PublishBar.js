import React, { Component } from 'react';
import { Label,Button, Form, FormGroup } from 'reactstrap';
import TemplateDropdown from '../TemplateDropdown/TemplateDropdown';
import ContentModal from '../ContentModal/ContentModal';

export default class PublishBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      editorContent: '',
      templateName: '',
      templateObject: {},
      allTemplates: []
    };
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal})
  }

  insertTemplate = () => {
    window.CKEDITOR.instances['editor1'].insertHtml(
      "<h1>Today's Highlights</h1><p>Type your highlights...</p><h1>Focus Items</h1>"
    )
  }

  handleFileSave = (e) => {
    e.preventDefault();
    var editorHtml = window.CKEDITOR.instances['editor1'].getData()
    this.setState({
      modal: !this.state.modal,
      templateObject: {
        templateName: this.state.templateName,
        templateContent: editorHtml
      }
    }, () => this.storeTemplateObject());
  }

  storeTemplateObject = () => {
    this.state.allTemplates.push(this.state.templateObject)
    localStorage.setItem("template", JSON.stringify(this.state.templateObject))
  }

  onChangeValue = (e) => {
    this.setState({
      templateName: e.target.value
    });
  }

  render() {

    return (
      <Form inline className="mb-4 Base">
        <FormGroup className="mb-2 mr-auto mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2 align-items-center">Template:</Label>
          <TemplateDropdown templateList={this.state.allTemplates}/>
          <Button
            onClick={this.insertTemplate}
            className="btn ml-2"
            size="sm">
            Add Template
          </Button>

          <Button
            onClick={this.toggle}
            className="btn ml-2"
            size="sm">
            Save as New Template
          </Button>
          <ContentModal
            editorContent={this.state.editorContent}
            modal={this.state.modal}
            toggle={this.toggle}
            handleFileSave={this.handleFileSave}
            onChangeValue={this.onChangeValue}/>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Button className="mr-2 btn green" size="sm">Publish</Button>
            <Button size="sm">Delete</Button>
        </FormGroup>
      </Form>
    );
  }
}
