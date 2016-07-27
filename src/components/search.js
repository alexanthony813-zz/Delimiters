import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
          <div className="search-bar form-inline">
            Search by propery name
            <input className="form-control" type="text" id="form-control" onChange={
              _.debounce(function(){this.props.searchHandler(document.getElementById("form-control").value)},400).bind(this)}/>
            <button id="add-property" onclick={function(){this.props.updateProperties(document.getElementById("form-control").value).bind(this)}}>Add property</button>
          </div> 
        );
    }

}
