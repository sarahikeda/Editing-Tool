import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
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
    console.log('1')
    this.state.allTemplates.push(this.state.templateObject)
    localStorage.setItem("template", JSON.stringify(this.state.templateObject))
    console.log('2')
  }

  onChangeValue = (e) => {
    this.setState({
      templateName: e.target.value
    });
  }

  render() {
    let templateList = (this.state.allTemplates.map((template) =>
      <option
        key={template.templateName}>
        {template.templateName}
      </option>
    ))
    return (
      <Form inline className="mb-4 Base">
        <FormGroup className="mb-2 mr-auto mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2 align-items-center">Template:</Label>
          <Input type="select" name="select" id="exampleSelect" bsSize="sm" className="template-select">
            <option value="Select" selected>Tech Template</option>
            {templateList}
          </Input>
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
