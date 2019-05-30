import React from 'react'
import Game from './Game'
import PropTypes from 'prop-types';

function Backlog(props) {
    //App -> state.games[]
    const {games} = props;

    //cycle through gamesList from App -> state[]
    const gameList = games.map(game => { 
        return (
            <Game key={game.id} game={game}/>
        )
    })
    return (
        <div className="backlog">{gameList}</div>
    )
    
}

Backlog.propTypes = {
    games: PropTypes.array.isRequired
}

export default Backlog;
