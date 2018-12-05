import React, { Component } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
// import '../CSS/DeleteBook.css';

export default class DeleteBook extends Component {

    deleteBook = async (event) => {
        // event.preventDefault()
        await fetch('https://api-wdkvqhjhgy.now.sh/books/id/' + this.props.data, {
        method: 'DELETE', // or 'PUT'
        // mode: 'cors',
      }).then(res => res.json())
      .then(console.log(`id ${this.props.data} was successfully deleted.`))
    //   .then(alert("The book was successfully deleted"))
    //   .then(data => this.setState({books: data}))
      this.props.refresher()
    }

    alertMessage = (evt) => {
        evt.preventDefault()
        confirmAlert ({
            title: 'Confirm to delete',
            message: 'Are you sure you want to delete this book?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => this.deleteBook()
              },
              {
                label: 'No',
                onClick: () => console.log('Did not delete')
              }
            ]
          })
    }
    
    render() {

        return(
            <div>
                <form>
                    <button type="button" onClick={this.alertMessage}>Delete</button>
                </form>
            </div>
        );
    }
}