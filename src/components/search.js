import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
          <div className="search-bar form-inline">
            Please search valid property to <b>show</b> on table
            <input className="form-control" type="text" id="form-control" onChange={
              _.debounce(function(){this.props.searchHandler(document.getElementById("form-control").value)},400).bind(this)}/>
          </div> 
        );
    }

}
