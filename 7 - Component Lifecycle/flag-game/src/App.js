import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: [''],
      currentFlag: '',
      correct: 0,
      incorrect: 0
    };
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all';

    fetch(url)
    .then(res => res.json())
    .then(countries => {
      console.log(countries);
      this.setState({countries})
    });
  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
