import React, { Component } from 'react';
import '../CSS/AddBook.css';

export default class AddBook extends Component {

    state = {
        title: '',
        author: '',
        genre: '',
        status: '',
        image: ''
    }

    addBook = async (evt) => {
        // evt.preventDefault()
        await fetch('http://localhost:4000/books', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.state), // data can be `string` or {object}!
        // mode: 'cors',
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
      this.props.refresher()
      this.setState({
        title: '',
        author: '',
        genre: '',
        status: '',
        image: ''
    })
    console.log(this.state)
    }
    
    render() {

        return(
            <div>
                <header id="header">Add Book</header>
                <form className="addShow" onSubmit={this.addBook}>
                    <input className="input" type="text" placeholder="Title" required
                    onChange={event => this.setState({title: event.target.value})} />
                    <input className="input" type="text" placeholder="Author" required
                    onChange={event => this.setState({author: event.target.value})}/>
                    <input className="input" type="text" placeholder="Genre" required
                    onChange={event => this.setState({genre: event.target.value})}/>
                    <label name="bookStatus">Book Status:</label> <br/>
                    <div className="radioBtns">
                        <input type="radio" name="status" value="Want to Read" required
                        onChange={event => this.setState({status: event.target.value})}/>Want to read
                        <input type="radio" name="status" value="Have Read" 
                        onChange={event => this.setState({status: event.target.value})}/>Have read
                        <input type="radio" name="status" value="Not Interested" 
                        onChange={event => this.setState({status: event.target.value})}/>Not Interested
                    </div>
                    <input className="input" type="text" placeholder="Image URL" required
                    onChange={event => this.setState({image: event.target.value})}/>
                    <input className="input" type="submit" onClick={this.props.close} value="Add Book"/>
                </form>
            </div>
        );
    }
}