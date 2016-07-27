import React from 'react';

export default class EntryListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr >
                    {this.props.properties.map(function(val, i){
                        return (
                            <th key = {i} onClick={function() {this.props.deleteHandler(val)}.bind(this)}>{val}</th>
                            )
                    }.bind(this))}
                </tr>
            </thead>
        );
    }
}
