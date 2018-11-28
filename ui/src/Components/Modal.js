import React, { Component } from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const contentStyle = {
    'textAlign': 'center'
}

export default class extends Component {
  constructor() {
    super();
 
    this.state = {
      modalIsOpen: false
    };
  }
 
  openModal = () => {
    this.setState({modalIsOpen: true});
  }
 
  closeModal = () => {
    this.setState({modalIsOpen: false});
  }
 
  render() {
    return (
      <div>
        <button onClick={this.openModal}>{this.props.btnText}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <div style={contentStyle}>
          <span>
            <h1>{this.props.title}</h1>
            <button onClick={this.closeModal}>close</button>
          </span>
          {this.props.children}
        </div>
        </Modal>
      </div>
    );
  }
}