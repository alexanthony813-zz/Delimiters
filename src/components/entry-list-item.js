import React from 'react';

export default class EntryListItem extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {

        return (
            <tr>
                <td>{this.props._id}</td>
                <td>{this.props[document.getElementById("form-control").value]}</td>
                {this.props.values.map(function(val, i){
                    return (<td key = {i}>{val}</td>)
                })}
            </tr>
        );
    }


}
