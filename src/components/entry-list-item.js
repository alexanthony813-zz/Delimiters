import React from 'react';

export default class EntryListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }



    render() {
        return (
            <tr>
                <td>{this.props._id}</td>
                <td>{this.props[document.getElementById("form-control").value]}</td>
            </tr>
        );
    }


}
