import React from 'react';
import Search from './search';
import EntryList from './entry-list';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        var entries = getDelimiters('_id');
        var properties;
        if(entries){
            properties = Object.keys(entries[0]);
        } else {
            properties = ["_id"];
        }

        this.state = {
            entries : entries,
            properties : properties
        };
    }

    handleSearch(propName){
 

        var result = (data) => {
            if(data.length > 0){
                var newProperties = this.state.properties.slice();
                newProperties.push(propName);
                this.setState({
                    entries : data,
                    properties : newProperties
                })
            } 
        }
        
        getDelimiters(propName,result);
    }

    handleDelete(propName){

        for(var i = 0; i < this.state.properties.length; i++){
            if(this.state.properties[i] === propName){
                this.state.properties.splice(i, 1);
                this.setState()
                return;
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Delimiters API</h1>
                <Search entries={this.state.entries} searchHandler={this.handleSearch.bind(this)} />
                <EntryList
                    entries={this.state.entries} properties = {this.state.properties} deleteHandler = {this.handleDelete.bind(this)}
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
