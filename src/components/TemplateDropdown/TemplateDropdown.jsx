import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

export default class TemplateDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen })
  }

  retrieveTemplate = (e) => {
    let selectedTemplate = this.props.templateList.filter((template) => template.templateName === e.target.value)
    let templateHtml = selectedTemplate[0].templateContent
    this.setEditorContent(templateHtml)
  }

  setEditorContent = (templateHtml) => {
    window.CKEDITOR.instances['editor1'].setData(templateHtml)
  }

  render() {
    let templateList = (this.props.templateList.map((template) =>
      <DropdownItem
        key={template.templateName}
        value={template.templateName}>
        {template.templateName}
      </DropdownItem>
    ))
    return (
      <div className="template-dropdown">
        <Dropdown
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}>
        <DropdownToggle caret>
            Tech Template
          </DropdownToggle>
          <DropdownMenu onClick={this.retrieveTemplate}>
            {templateList}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
