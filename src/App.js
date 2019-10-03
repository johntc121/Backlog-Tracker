import React, {Component} from 'react';
import Header from './components/Header'
import TotalHours from './components/TotalHours'
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
      notStarted: true,
      inProgress: false,
      completed: false,

    }

    this.setState({games: [...this.state.games, newGame]})
  }


//Functions to control the 3 checkboxes

  notStarted = (id) => {
    this.setState({games: this.state.games.map(game => {
      if(game.id === id){
      
        game.notStarted = !game.notStarted
        game.inProgress = false;
        game.completed = false;

        if(game.inProgess === false && game.completed === false){
          game.notStarted = true;
        }
      }
      return game;
    })})
    
  };

  inProgress = (id) => {
    this.setState({games: this.state.games.map(game => {
      if(game.id === id){
      
        game.inProgress = !game.inProgress
        //game.notStarted = false;
        game.completed = false;

        if(game.inProgess === false && game.completed === false){
          game.notStarted = true;
          console.log('both false'); //this is not running?
        }

        else{
          game.notStarted = false;
        }
      }

      
      return game;
    })})
  };

  markCompleted = (id) => {
    this.setState({games: this.state.games.map(game => {
      if(game.id === id){
      
        game.completed = !game.completed
        //game.notStarted = false;
        game.inProgress = false;
        
        if(game.inProgess === false && game.completed === false){
          game.notStarted = true;
        }

        else{
          game.notStarted = false;
        }
      }
      return game;
    })})
  };

//END checkboxes functions

  render () {
    return (
      <div className="App">
        <Header />
        <React.Fragment>
          <AddGame addGame={this.addGame} />
          <Backlog games={this.state.games} 
            markCompleted={this.markCompleted} 
            inProgress={this.inProgress}
            notStarted={this.notStarted}
          />
          <TotalHours games={this.state.games}/>
        </React.Fragment>
      </div>
    );
  }
  
}

export default App;
