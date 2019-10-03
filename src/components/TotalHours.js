import React from 'react'

function TotalHours(props) {
    const {hours, completed} = props.games

    

    let totalHours = 0;
    props.games.map(game => {
        if(game.completed === false){
            totalHours = totalHours + game.hours;
        }

        return totalHours
    });
    return (
        <header style={headerStyle}>
            <h3>Total Hours: {totalHours}</h3>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default TotalHours;