import React, {Component} from 'react'
import Game from './Game'
import PropTypes from 'prop-types';

class Backlog extends Component {
    render() {
        return this.props.games.map((game) => (
            <Game key={game.id} game={game} 
                markCompleted={this.props.markCompleted} 
                inProgress={this.props.inProgress} 
                notStarted={this.props.notStarted}
            />
        ));
    }
}

// function Backlog(props) {
//     //App -> state.games[]
//     const {games} = props;

//     //cycle through gamesList from App -> state[]
//     const gameList = games.map(game => { 
//         return (
//             <Game key={game.id} game={game} markCompleted={game.markCompleted}/>
//         )
//     })
//     return (
//         <div className="backlog">{gameList}</div>
//     )
    
// }

Backlog.propTypes = {
    games: PropTypes.array.isRequired,
    markCompleted: PropTypes.func.isRequired,
    inProgress: PropTypes.func.isRequired
}

export default Backlog;
