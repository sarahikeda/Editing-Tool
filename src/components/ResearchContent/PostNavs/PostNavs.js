import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Button, Popover, PopoverHeader } from 'reactstrap';

class PostNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          popoverOpen: false
        };
      }
    
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    render() {
        return (
            <div className="float-right">
                <FontAwesomeIcon id={"pop" + this.props.id} icon="times-circle" transform="rotate-45" onClick={() => this.toggle()}/>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target={"pop" + this.props.id} toggle={() => this.toggle()}>
                    <PopoverHeader>Popover Title</PopoverHeader>
                </Popover>
            </div>
        )
    }
}

export default PostNav