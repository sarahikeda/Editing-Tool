import React, { Component } from 'react';
import Icon from './../../../assets/Icons/Icon';
import { ICONS } from './../../../assets/Icons/icon.constants';
import { Table } from 'reactstrap';

class Following extends Component {

    render() {
        const authors = this.props.specs.filter(filter => {
            return filter.author
        }).map(following => {
            return (
                <tr key={following.id} className="mb-2 clearfix">
                    <th style={{width: '4%'}} scope="row">    
                        <Icon icon={ICONS.STAR} size={14} color={following.following ? "#F5A623" : "#9B9B9B"} w={42} h={42} />
                    </th>
                    <td style={{width: '48%'}}>
                        <Icon icon={following.author ? ICONS.AUTHOR : ICONS.TOPIC} size={14} color="#1A3E6F" w={1200} h={1200}  />
                        <span>{following.author ? following.name : following.sector}</span>
                    </td>
                    <td style={{width: '48%'}}>
                        <span>{following.author ? following.sector : ''}</span>
                    </td>
                </tr>
            )
        })

        const topics = this.props.specs.filter(filter => {
            return filter.topic
        }).map(following => {
            return (
                // <div key={following.id} className="mb-2 clearfix">
                //     <span className="float-left mr-2">
                //         <Icon icon={ICONS.STAR} size={14} color={following.following ? "#F5A623" : "#9B9B9B"} w={42} h={42} />
                //     </span>
                //     <span className="float-left mr-2">
                //         <Icon icon={following.author ? ICONS.AUTHOR : ICONS.TOPIC} size={14} color="#1A3E6F" />
                //     </span>
                //     <span className="float-left">{following.author ? following.name : following.sector}</span>
                //     <span className="float-right">{following.author ? following.sector : ''}</span>
                // </div>
                <tr key={following.id} className="mb-2 clearfix">
                    <th style={{width: '4%'}} scope="row">    
                        <Icon icon={ICONS.STAR} size={14} color={following.following ? "#F5A623" : "#9B9B9B"} w={42} h={42} />
                    </th>
                    <td style={{width: '48%'}}>
                        <Icon icon={following.author ? ICONS.AUTHOR : ICONS.TOPIC} size={14} color="#1A3E6F" w={1250} h={1250}  />
                        <span>{following.author ? following.name : following.sector}</span>
                    </td>
                    <td style={{width: '48%'}}>
                        <span>{following.author ? following.sector : ''}</span>
                    </td>
                </tr>
            )
        })
        return (
            <div className="animated bounceInDown">
                <Table size="sm" responsive>
                    <thead>
                    <tr>
                        <th style={{width: '4%'}}> </th>
                        <th style={{width: '48%'}}><span className="t-headers">Authors</span></th>
                        <th style={{width: '48%'}}><span className="t-headers">Covered Sector</span></th>
                    </tr>
                    </thead>
                    <tbody>
                        {authors}
                    </tbody>
                </Table>

                <Table>
                    <thead>
                    <tr>
                        <th style={{width: '4%'}}> </th>
                        <th style={{width: '48%'}}><span className="t-headers">Topics</span></th>
                        <th style={{width: '48%'}}></th>
                    </tr>
                    </thead>
                    <tbody>
                        {topics}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Following