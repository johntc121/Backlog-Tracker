import React, { Component } from 'react'
//import PropTypes from 'prop-types';

class Game extends Component {
    render() {
        const {id, title, hours, system} = this.props.id

        return (
            <div className="game" key={id}>
                <div>Title: {title}</div>
                <div>System: {system}</div>
                <div>Hours: {hours}</div>
            </div>
        )
    }
}

export default Game;