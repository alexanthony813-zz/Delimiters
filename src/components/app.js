import React from 'react';
import Search from './search';
import EntryList from './entry-list';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        var entries = getDelimiters('_id');
        var headers;
        if(entries){
            headers = Object.keys(entries[0]);
        } else {
            headers = ["INVALID INPUT"]
        }

        this.state = {
            entries : entries,
            properties : headers
        };
    }

    handleSearch(propName){
 
        var result = (data) => {
          this.setState({
            entries : data,
            properties : Object.keys(data[0])
          })
        }
        
        getDelimiters(propName,result);
    }

    render() {
        return (
            <div>
                <h1>Delimiters API</h1>
                <Search entries={this.state.entries} searchHandler={this.handleSearch.bind(this)} />
                <EntryList
                    entries={this.state.entries} properties = {this.state.properties}
                />
            </div>
        );
    }


}

function getDelimiters(propName, callback){
    var url = "http://localhost:3000/api/delimiters/"+propName
    $.ajax({
        type: 'GET',
        url: url,
        contentType: 'application/json',
        success: callback,
        error: function(err){
          console.log("ERROR, ajaxfail", err)
        }
    });
}
