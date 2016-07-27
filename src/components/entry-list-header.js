import React from 'react';

export default class EntryListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    {this.props.properties.map(function(val, i){
                        return (
                            <th key = {i}>{val}</th>
                            )
                    })}
                </tr>
            </thead>
        );
    }
}
