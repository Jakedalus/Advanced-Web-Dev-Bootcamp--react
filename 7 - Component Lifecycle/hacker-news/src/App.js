import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json';
    const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';

    fetch(topStories)
      .then(data => data.json())
      .then(data => data.map(id => {
        const url = `${storyUrlBase}${id}.json`;
        return fetch(url).then(d => d.json());
      }))
      .then(promises => {
        console.log(promises);
        return Promise.all(promises)})
      .then(stories => {
        console.log(stories);
        return this.setState({stories})})
      .catch(error => console.log(error));

  }

  render() {
    let views = <div>loading...</div>
    const {stories} = this.state;

    if (stories && stories.length > 0) {
      views = stories.map(s => (
        <p key={s.id}>
          <a href={s.url}>{s.title}</a> from <strong>{s.by}</strong>
        </p>
      ));
    }

    return (
      <div className="App">
        <h1>Hacker News</h1>
        {views}
      </div>
    );
  } 
}

export default App;
