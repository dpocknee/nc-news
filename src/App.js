import React, { Component } from 'react';
import './App.css';
import './css/Article.css';
import './css/Comment.css';
import Navbar from './components/navbar/Navbar';
import MainWindow from './components/MainWindow';

class App extends Component {
  state = {
    topics: [],
    searchInfo: null,
    logged: false
  };
  render() {
    return (
      <div className="App">
        <Navbar searchHandler={this.searchHandler} login={this.login} />
        <MainWindow searchInfo={this.state.searchInfo} login={this.login} />
      </div>
    );
  }
  searchHandler = (event, searchInfo) => {
    event.preventDefault();
    this.setState({
      searchInfo: searchInfo
    });
  };
  login = status => {
    this.setState({ logged: status });
  };
}

export default App;
