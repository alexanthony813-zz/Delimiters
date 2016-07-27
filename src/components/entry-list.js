import _ from 'lodash';
import React from 'react';
import EntryListHeader from './entry-list-header';
import EntryListItem from './entry-list-item';

export default class EntryList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'entries');

        if(!this.props.entries || this.props.entries.length === 0){
            return (
                <tr><td>Invalid property</td></tr>
                );
        }

        return _.map(this.props.entries, function(entry, index){
            entry.values = _.map(entry, function(value, index) {return value});
            return (
                <EntryListItem key={index} {...entry} {...props} />
                )
            })
    }

    render() {
        console.log('in "ENTRY LIST: props, state', this.props, this.state)
        return (
            <table>
                <EntryListHeader properties = {this.props.properties}/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
