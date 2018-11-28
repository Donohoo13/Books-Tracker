import React, { Component } from 'react';
import BooksShort from './BooksShort';
import AddBook from './AddBook';

import '../CSS/Books.css'

class Books extends Component {
    state = {
        books: [],
        search: '',
    }

    refresh = (event) => {
        console.log('ho ho ho')
        this.search()
    }

    searching = (event) => {
        event.preventDefault()
        this.search()
    }

    search = async (event) => {
        // event.preventDefault()
        console.log("search: ", this.state.search)
        if( this.state.search === '') {return this.getBooks()}
        else{
        await fetch('http://localhost:4000/books/title/' + this.state.search)
        .then(res => res.json())
        .then(data => this.setState({books: data}))
        }
        console.log('search results: ', this.state.search)
    }
    
    getBooks = async () => {
        await fetch('http://localhost:4000/books')
        .then(res => res.json())
        .then(data => this.setState({books: data}))
        console.log("state", this.state.books)
        }

    componentDidMount = async () => {
        await this.getBooks()
    }

    render() {

        return(
            <div>
            <form>
                <input type="text" placeholder="search" 
                onChange={event => this.setState({search: event.target.value})}/>
                <button onClick={this.searching} value="Search">Search</button>
            </form>
            <BooksShort refresher={this.refresh} data={this.state.books}/>
            <AddBook refresher={this.refresh} />
            </div>
        );
    }
}

export default Books