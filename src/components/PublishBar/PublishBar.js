import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class PublishBar extends Component {
    render() {
        return (
        <Form inline  className="mb-4 Base">
            <FormGroup className="mb-2 mr-auto mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2 align-items-center">Template:</Label>
                <Input type="select" name="select" id="exampleSelect" bsSize="sm" className="template-select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
                
                <Button className="btn ml-2" size="sm">Save as New Template</Button>
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Button className="mr-2 btn green" size="sm">Publish</Button>
                <Button size="sm">Delete</Button>
            </FormGroup>
        </Form>
        );
    }
}