import React, { Component } from 'react';
import _ from 'lodash';
import Header from './Header';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      countries: [''],
      currentCountry: '',
      multipleChoices: [],
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
      this.setState({countries}, () => {
        const currentCountry = this.randomCountry();
        console.log(currentCountry);
        this.setState({currentCountry});
      })
    });
  }

  randomCountry() {
    return _.sample(this.state.countries);
  }


  render() {

    return (
      <div className="App">
        <Header />
        
        <img className="flag" src={this.state.currentCountry.flag} />
      </div>
    );
  }
}

export default App;
