import React from 'react';

export default class EntryListHeader extends React.Component {
    render() {
        return (
            <thead className="thead-inverse">
                <tr>
                    {this.props.properties.map(function(val, i){
                        return (
                            <th key = {i}>{val}
                                <button onClick={function() {this.props.deleteHandler(val)}.bind(this)} className="btn btn-danger glyphicon glyphicon-remove-sign"></button>
                                <button className="btn btn-primary dedupe glyphicon glyphicon-duplicate" onClick={function() {this.props.toggleUniqueValues(val)}.bind(this)}></button>
                            </th>
                            )
                    }.bind(this))}
                
                </tr>
            </thead>
        );
    }
}
