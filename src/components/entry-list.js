import _ from 'lodash';
import React from 'react';
import EntryListHeader from './entry-list-header';
import EntryListItem from './entry-list-item';

export default class EntryList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'entries');

        if(!this.props.entries || (this.props.entries.length === 0 && this.props.properties.length === 1)){
            return (
                <tr><td>Please search via property name above</td></tr>
                );
        }

        return _.map(this.props.entries, function(entry, index){
            entry.values = [];
            for(var prop in entry){
                if(this.props.properties.indexOf(prop) !== -1){
                    entry.values.push(entry[prop])
                }
            }

            return (
                <EntryListItem key={index} {...entry} {...props} />
                )
            }.bind(this))
    }

    render() {
        return (
            <table>
                <EntryListHeader properties = {this.props.properties} deleteHandler = {this.props.deleteHandler.bind(this)}/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
