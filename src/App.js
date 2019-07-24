import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Laxman', age: 29 },
      { id: '2', name: 'Prashant', age: 31 },
      { id: '3', name: 'Satish', age: 30 }
    ],
    showPersons: false
  }

  togglePersons = () =>{
    const showPerson = this.state.showPersons;
    this.setState({ showPersons: !showPerson});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = [...this.state.persons][personIndex]
    person.name = event.target.value;
    const all_persons = [...this.state.persons]
    all_persons[personIndex] = person;

    this.setState( { persons: all_persons } )
  }

  render(){
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
          <div>
            {
              this.state.persons.map((person, index) => {
                return(
                  <Person click={() => this.deletePersonHandler(index)}
                          name={person.name} age={person.age} key={person.id}
                          changed={(event) => this.nameChangeHandler(event, person.id)}/>
                )
              })
            }
          </div>
      )
      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>Hi, I am React app</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersons}>Show Hide Persons</button>
        {persons}
      </div>
    );
  }
}

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Laxman', age: 29 },
//       { name: 'Prashant', age: 31 },
//       { name: 'Satish', age: 30 }
//     ]
//   });

//   console.log(personsState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'More', age: 29 },
//         { name: 'Prashant', age: 31 },
//         { name: 'Satish', age: 30 }
//       ]
//     })
//   }

//   return (
//     <div className='App'>
//       <h1>Hi, I am React app</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
//         My Hobbies are: Watching cricket & movies
//       </Person>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//     </div>
//   );
// }

export default App;
