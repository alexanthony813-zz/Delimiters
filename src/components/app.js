import React from 'react';
import Search from './search';
import EntryList from './entry-list';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entries : getDelimiters('_id')
        };
    }

    handleSearch(propName){
 
        var result = (data) => {
          this.setState({
            entries : data
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
                    entries={this.state.entries}
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
