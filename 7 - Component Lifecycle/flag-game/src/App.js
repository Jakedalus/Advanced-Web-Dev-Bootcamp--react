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
      result: '',
      correct: 0,
      incorrect: 0
    };

    this.newQuestion = this.newQuestion.bind(this);
    this.checkChoice = this.checkChoice.bind(this);
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

    let multipleChoices = [];

    for (let i = 0; i < 3; i++) {
      multipleChoices.push(_.sample(this.state.countries).name);
    }

    multipleChoices.push(currentCountry.name);

    multipleChoices = _.shuffle(multipleChoices);

    console.log('newQuestion:', currentCountry, multipleChoices);

    this.setState({currentCountry, multipleChoices, result: ''});
  }

  checkChoice(choice) {
    console.log(choice);
    if (choice === this.state.currentCountry.name) {
      this.setState((prevState, props) => ({result: 'Correct!!', correct: prevState.correct+1}));
    } else {
      this.setState((prevState, props) => ({result: `Wrong :( The correct answer is ${this.state.currentCountry.name}`, incorrect: prevState.incorrect+1}));
    }
  }

  render() {

    return (
      <div className="App">
        <Header correct={this.state.correct} incorrect={this.state.incorrect}/> 
        <div>
          <ul>
            {
              this.state.multipleChoices.map(choice => (
                <li 
                  key={choice} 
                  className="button choice" 
                  onClick={this.state.result ? () => {} : () => this.checkChoice(choice)}
                >
                  {choice}
                </li>
              ))
            }
          </ul>

          <div className="dashboard">
            <p className="result">{this.state.result}</p>
            {this.state.result && <button className="button" onClick={this.newQuestion}>NEXT</button>}
          </div>

          <img className="flag" src={this.state.currentCountry.flag} />
        </div>
      </div>
    );
  }
}

export default App;
