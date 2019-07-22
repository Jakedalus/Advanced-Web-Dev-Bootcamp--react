import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';
  }


  render() {
    return (
      <div className="App">
        flags
      </div>
    );
  }
}

export default App;
