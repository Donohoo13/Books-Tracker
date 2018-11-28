import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';

import '../CSS/Search.css'

class Search extends Component {
    state = {
        search: '',
    }

    search = async (event) => {
        event.preventDefault()
        console.log("search: ", this.state.search)
        if( this.state.search === '') {
            return this.props.getBook().then(console.log('search results', this.props.books))
        }
        else{
            const result = await fetch('http://localhost:4000/books/title/' + this.state.search.replace(/\s/, ""))
            .then(res => res.json())
            .then(data => data)
            console.log('data:', result)
            this.props.set(result)
        }
    }

    render() {
        return(
            <div className="searching">
            <form onSubmit={this.search}>
              <div className="outline">
                <Input className="search" type="text" placeholder="Search" 
                onChange={event => this.setState({search: event.target.value})}/>
                <SearchIcon className="icon"/>
                {/* <input type="submit" value="Search" /> */}
                </div>
            </form>
            </div>
        );
    }
}

export default Search