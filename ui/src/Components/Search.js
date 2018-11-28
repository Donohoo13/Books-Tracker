import React, { Component } from 'react';

import '../CSS/Books.css'

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
            const result = await fetch('http://localhost:4000/books/title/' + this.state.search)
            .then(res => res.json())
            .then(data => data)
            console.log('data:', result)
            this.props.set(result)
        }
    }

    render() {

        return(
            <form onSubmit={this.search}>
                <input type="text" placeholder="search" 
                onChange={event => this.setState({search: event.target.value})}/>
                <input type="submit" value="Search" />
            </form>
        );
    }
}

export default Search