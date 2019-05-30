import React, {Component} from 'react';
import Header from './components/Header'
import Backlog from './components/backlog/Backlog'
import './App.css'

import uuid from 'uuid';
import AddGame from './components/backlog/AddGame';

class App extends Component {

  state = {
    games: [
      
    ]
  }

  addGame = (title, hours) => {
    const newGame = {
      id: uuid.v4(),
      title: title,
      hours: hours,
      completed: false,
      inProgress: false,
      started: false
    }

    this.setState({games: [...this.state.games, newGame]})
  }

  render () {
    return (
      <div className="App">
        <Header />
        <AddGame addGame={this.addGame} />
        <Backlog games={this.state.games}/>
      </div>
    );
  }
  
}

export default App;
