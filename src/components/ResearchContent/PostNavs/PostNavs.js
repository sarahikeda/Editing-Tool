import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Popover, PopoverHeader } from 'reactstrap';
import Icon from './../../../assets/Icons/Icon';
import {ICONS} from './../../../assets/Icons/icon.constants';

class PostNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          popoverOpen: false
        };
      }
    
    toggle = () => {
        let popOpen = this.state.popoverOpen;
        this.setState({
            popoverOpen: !popOpen
        });
    }

    render() {
        let checkClicked = [];
        
        if(this.state.popoverOpen) checkClicked.push('click');

        return (
            <div className="float-right" >
                <FontAwesomeIcon id={`pop${this.props.id}`} 
                    icon="times-circle" size="lg" transform="rotate-45" 
                    className={checkClicked.join(' ')}
                    onClick={this.toggle}/>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target={`pop${this.props.id}`} toggle={this.toggle}>
                    <PopoverHeader>
                        <button className="mr-1 btn btn-xs" onClick={this.toggle}><Icon icon={ICONS.BLURB} size={14} color="#2f63af"/></button>
                        <button className="btn btn-xs" onClick={this.toggle}><Icon icon={ICONS.BLURB} size={14} color="#2f63af"/></button>
                    </PopoverHeader>
                </Popover>
            </div>
        )
    }
}

export default PostNav