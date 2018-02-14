import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Popover, PopoverHeader } from 'reactstrap';
import Icon from './../../../assets/Icons/Icon';
import {ICONS} from './../../../assets/Icons/icon.constants';

class PostNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          popoverOpen: false,
          listSpecs: [
              {title: 'Standard Format', value: 'SF'},
              {title: 'Classic Format', value: 'CF'},
              {title: 'Headline Only', value: 'HDO'},
              {title: 'Hyperlink Only', value: 'HPL'},
              {title: 'Whole Summary', value: 'WS'}
            ]
        };
      }
    
    toggle = (_val) => {
        let popOpen = this.state.popoverOpen;
        this.setState({
            popoverOpen: !popOpen
        });
        this.props.isOpen(this.state.popoverOpen);
        if(typeof _val === 'string'){
            this.props.setContent(_val);
        }
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
                    <PopoverHeader style={{padding: '0.3rem 0.3rem'}}>
                        <div onClick={this.toggle.bind(this, this.state.listSpecs[0].value)} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.BLURB} size={14} color="#ffffff" w={1085} h={1085}/>
                            </span>
                            <span className="dropdown-label">
                                 {this.state.listSpecs[0].title}
                            </span>
                        </div>
                        <div onClick={this.toggle.bind(this, this.state.listSpecs[1].value)} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.BLURB} size={14} color="#ffffff" w={1085} h={1085}/>
                            </span>
                            <span className="dropdown-label">
                                {this.state.listSpecs[1].title}
                            </span>
                        </div>
                        <div onClick={this.toggle.bind(this, this.state.listSpecs[2].value)} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.HEADLINE} size={14} color="#ffffff" w={80} h={80}/>
                            </span>
                            <span className="dropdown-label"> 
                                {this.state.listSpecs[2].title}
                            </span>
                        </div>
                        <div onClick={this.toggle.bind(this, this.state.listSpecs[3].value)} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.LINK} size={14} color="#ffffff" w={36} h={36}/>
                            </span>
                            <span className="dropdown-label"> 
                                {this.state.listSpecs[3].title} 
                            </span>
                        </div>
                        <div onClick={this.toggle.bind(this, this.state.listSpecs[4].value)} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.BLURB} size={14} color="#ffffff" w={1085} h={1085}/>
                            </span>
                            <span className="dropdown-label">
                                {this.state.listSpecs[4].title}
                            </span>
                        </div>
                    </PopoverHeader>
                </Popover>
            </div>
        )
    }
}

export default PostNav