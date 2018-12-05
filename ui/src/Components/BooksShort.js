import React, { Component } from 'react';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook';
import Modal from './Modal';

import '../CSS/BooksShort.css'


class BooksShort extends Component {
  
    render() {
        let books = this.props.data.map((book) => {
            return(
                <div>
                <div className="bookMap" key={book._id}>
                    <div>{book.title}</div>
                    <img alt={book.title} className="image" src={book.image}/>
                    <DeleteBook refresher={this.props.refresher} data={book._id} />
                    <Modal btnText="Update">
                        <UpdateBook id={book._id} title={book.title} author={book.author} genre={book.genre}
                    status={book.status} image={book.image} refresher={this.props.refresher} closeModal={this.closeModal}/>
                    </Modal>
                </div>
                </div>
            );
        })
        return(
            <div className="books">{books}</div>
        );
    }
}

export default BooksShort