import React, { Component } from "react";
import BooksShort from "./BooksShort";
import AddBook from "./AddBook";
import Layout from "./Layout";
import Search from "./Search";
import Modal from "./Modal";

import "../CSS/Books.css";

class Books extends Component {
  state = {
    books: []
  };

  //  Refreshes getBooks without refreshing the page.
  // refresh = (event) => {
  //     this.getBooks()
  // }

  //  Gets all books from database and posts them to the DOM
  getBooks = async () => {
    await fetch("https://api-wdkvqhjhgy.now.sh/books")
      .then(res => res.json())
      .then(data => this.setState({ books: data }));
    console.log("state", this.state.books);
  };

  //  Manipulating DOM to render with the books pull from DB
  componentDidMount = async () => {
    await this.getBooks();
  };

  //  Passing props through to add search bar to Layout page and set state correctly.
  search = () => (
    <Search
      books={this.state.books}
      getBook={this.getBooks}
      set={data => this.setState({ books: data })}
    />
  );

  render() {
    return (
      <div>
        <Layout
          search={this.search}
        />
        <Modal title="Add Show" btnText="Add New">
          <AddBook refresher={this.getBooks} closeModal={this.closeModal} />
        </Modal>
        <BooksShort refresher={this.getBooks} data={this.state.books} />
      </div>
    );
  }
}

export default Books;
