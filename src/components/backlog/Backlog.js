import React from 'react'
import Game from './Game'

function Backlog(props) {
    //App -> state.games[]
    const {games} = props;

    //cycle through gamesList from App -> state[]
    const gameList = games.map(game => { 
        return (
            <div className="game" key={game.id}>
                <div>Title: {game.title}</div>
                <div>System: {game.system}</div>
                <div>Hours: {game.hours}</div>
            </div>
        )
    })
    return (
        <div className="backlog">{gameList}</div>
    )
    
}

export default Backlog;
