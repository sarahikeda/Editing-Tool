import React from 'react';
import Icon from './../../assets/Icons/Icon';
import {ICONS} from './../../assets/Icons/icon.constants';

const TagItem = (tag) => {
    return (
        <span className="animated bounceIn tag-item clearfix">
            <span className="float-left">{tag.name}</span>
            <span className="float-right close-btn" onClick={tag.click}>
                <Icon icon={ICONS.CLOSE} size={14} color="#1a3e6f" w={44} h={44}/>
            </span>
        </span> 
    )
}

export default TagItem