import React, { Component } from 'react';
import '../CSS/UpdateBook.css';

export default class UpdateBook extends Component {
    state = {
        title: this.props.title,
        author: this.props.author,
        genre: this.props.genre,
        status: this.props.status,
        image: this.props.image
    }

    updateBook = async (evt) => {
        evt.preventDefault()
        await fetch('https://api-mzmhuwybvg.now.sh/books/id/' + this.props.id, {
        method: 'PUT', // or 'POST'
        body: JSON.stringify(this.state), // data can be `string` or {object}!
        // mode: 'cors',
      }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
      console.log(this.state)
      this.props.refresher()
      this.props.closeModal()
    }
    
    render() {

        return(
            <div>
                <header id="header">{`Update ${this.props.title}`}</header>
                <form className="updateShow" onSubmit={this.updateBook}>
                    <input className="input" type="text" placeholder="Title" value={this.state.title}
                    onChange={event => this.setState({title: event.target.value})} />
                    <input className="input" type="text" placeholder="Author" value={this.state.author}
                    onChange={event => this.setState({author: event.target.value})}/>
                    <input className="input" type="text" placeholder="Genre" value={this.state.genre}
                    onChange={event => this.setState({genre: event.target.value})}/>
                    <label name="bookStatus">Book Status:</label> <br/>
                    {/* <span id="currentStatus">{`Current Status: ${this.props.status}`}</span> */}
                    <div className="radioBtns">
                        <input type="radio" name="status" value="Want to Read" defaultChecked={this.state.status === "Want to Read"}
                        onChange={event => this.setState({status: event.target.value})} required/>Want to read
                        <input type="radio" name="status" value="Have Read" defaultChecked={this.state.status === "Have Read"}
                        onChange={event => this.setState({status: event.target.value})}/>Have read
                        <input type="radio" name="status" value="Not Interested" defaultChecked={this.state.status === "Not Interested"}
                        onChange={event => this.setState({status: event.target.value})}/>Not Interested
                    </div>
                    <input className="input" type="text" placeholder="Image URL" value={this.state.image}
                    onChange={event => this.setState({image: event.target.value})}/>
                    <input className="input" type="submit" value="Update Book"/>
                </form>
            </div>
        );
    }
}