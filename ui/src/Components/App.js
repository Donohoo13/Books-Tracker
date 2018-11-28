import React, { Component } from 'react';
import Layout from './Layout'
import '../CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout title="Welcome to the Book Store!"/>
      </div>
    );
  }
}

export default App;