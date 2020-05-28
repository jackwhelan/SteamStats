import React, { Component } from 'react';

class SearchByIdComponent extends Component {
    state = {
        search: ''
    }

    onSearchChange = (event) => {
        this.setState({
            search: event.target.value
        });
    }

    fetchQuery = () => {
        const [id] = this.state.search.split('/').slice(-1)
        console.log(id)
        
    }

    render() {
        const searchBar = (
            <div className="container mt-3 px-5 p-4 rounded border border-dark">
                <h4>Search by Steam profile</h4>
                <hr className="bg-dark" />
                <div className="row">
                    <div className="col-9">
                        <input
                            type="search"
                            className="form-control mb-2"
                            placeholder="https://steamcommunity.com/id/Thisismymainyounooblol"
                            onChange={this.onSearchChange}
                        />
                    </div>
                    <div className="col-3">
                        <input type="submit"
                            className="button btn-md btn-secondary form-control"
                            value="Search"
                            onClick={this.fetchQuery}
                        />
                    </div>
                </div>
            </div>
        )

        return (
            <div>
                {searchBar}
                {this.state.response ? console.log(this.state.response) : console.log("no response")}
            </div>
        );
    }
}
 
export default SearchByIdComponent;