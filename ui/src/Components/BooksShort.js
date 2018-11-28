import React, { Component } from 'react';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook';
import Modal from './Modal';

class BooksShort extends Component {
  
    render() {
        let books = this.props.data.map((book) => {
            return(
                <div key={book._id}>
                    <div>{book.title}</div>
                    <img alt={book._id} className="image" src={book.image}/>
                    <DeleteBook refresher={this.props.refresher} data={book._id} />
                    {/* <UpdateBook id={book._id} title={book.title} author={book.author} genre={book.genre}
                    status={book.status} image={book.image} /> */}
                    <Modal title="Update Book" btnText="Update">
                        <UpdateBook id={book._id} title={book.title} author={book.author} genre={book.genre}
                    status={book.status} image={book.image} />
                    </Modal>
                </div>
            );
        })
        return(
            <span>{books}</span>
        );
    }
}

export default BooksShort