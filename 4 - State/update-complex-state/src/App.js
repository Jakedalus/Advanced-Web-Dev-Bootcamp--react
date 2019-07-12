import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {

      // MY SOLUTION
      // const randomInstructor = {...this.state.instructors[Math.floor(Math.random() * this.state.instructors.length)]};
      // const newHobbies = {
      //   ...randomInstructor,
      //   hobbies: randomInstructor.hobbies.splice(Math.floor(Math.random() * randomInstructor.hobbies.length), 1)
      // };

      // console.log(randomInstructor);
      // console.log(newHobbies);

      // this.setState({
      //   ...this.state.instructors,
      //   randomInstructor
      // });


      // VIDEO SOLUTION
      const randomInstructorIdx = Math.floor(Math.random() * this.state.instructors.length);
      const randomHobbyIndx = Math.floor(Math.random() * this.state.instructors[randomInstructorIdx].hobbies.length);

      // console.log(randomInstructorIdx, randomHobbyIndx);
      const instructors = this.state.instructors.map((inst, i ) => {
        if (i === randomInstructorIdx) {
          const hobbies = inst.hobbies.slice();
          hobbies.splice(randomHobbyIndx, 1);
          return {
            ...inst,
            hobbies
          };
        }

        return inst;
      });

      this.setState({instructors});

    }, 1000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;