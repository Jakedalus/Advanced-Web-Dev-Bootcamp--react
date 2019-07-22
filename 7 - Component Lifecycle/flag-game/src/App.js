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
        this.newQuestion();
      })
    });
  }

  newQuestion() {
    const currentCountry = _.sample(this.state.countries);

    const multipleChoices = [];

    for (let i = 0; i < 3; i++) {
      multipleChoices.push(_.sample(this.state.countries).name);
    }

    multipleChoices.push(currentCountry.name);

    this.setState({currentCountry, multipleChoices});
  }

  render() {

    return (
      <div className="App">
        <Header /> 
        <div>
          <ul>
            {this.state.multipleChoices.map(choice => (<li className="choice">{choice}</li>))}
          </ul>
          <img className="flag" src={this.state.currentCountry.flag} />
        </div>
      </div>
    );
  }
}

export default App;
