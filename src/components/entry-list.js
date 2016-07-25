import _ from 'lodash';
import React from 'react';
import EntryListHeader from './entry-list-header';
import EntryListItem from './entry-list-item';

export default class EntryList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'entries');

        return _.map(this.props.entries, (entry, index) => <EntryListItem key={index} {...entry} {...props} />);
    }

    render() {
        return (
            <table>
                <EntryListHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
