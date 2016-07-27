import React from 'react';

export default class EntryListItem extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <tr>
                <td>{this.props._id}</td>
                {this.props.values.map(function(val, i){
                    return (<td key = {i}>{val}</td>)
                })}
                <td><button></button></td>
            </tr>
        );
    }


}
