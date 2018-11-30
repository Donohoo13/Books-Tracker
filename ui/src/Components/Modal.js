import React, { Component } from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    // marginTop             : '-2em',
    transform             : 'translate(-50%, -50%)',
    maxHeight             : '80%',
    minWidth              : '50%'
  }
};

const contentStyle = {
    'textAlign': 'center'
}

const button = {
    'display': 'flex',
    // 'justifyItems': 'flexEnd',
    // 'marginBottom': '-1em',
    'marginLeft': '-1.3em',
    'marginTop': '-1.2em',
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
        {/* <h2 style={title}>{this.props.title}</h2> */}
            <button style={button} onClick={this.closeModal}>X</button>
          {this.props.children}
        </div>
        </Modal>
      </div>
    );
  }
}