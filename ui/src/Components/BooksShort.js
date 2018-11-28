import React, { Component } from 'react';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook'

class BooksShort extends Component {
  
    render() {
        let books = this.props.data.map((book) => {
            return(
                <div key={book._id}>
                    <div>{book.title}</div>
                    <img alt={book._id} className="image" src={book.image}/>
                    <DeleteBook refresher={this.props.refresher}  data={book._id} />
                    {/* <UpdateBook id={book._id} title={book.title} author={book.author} genre={book.genre}
                    status={book.status} image={book.image} /> */}
                </div>
            );
        })
        return(
            <span>{books}</span>
        );
    }
}

export default BooksShort