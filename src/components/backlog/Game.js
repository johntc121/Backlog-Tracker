import React, { Component } from 'react'
import PropTypes from 'prop-types';


import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import ps4logo from '../../ps4logo.jpeg';

class Game extends Component {

    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }

    

    styles = () => {
        return {
            width: 200
        }
    }

    render() {
        const {id, title, hours, system} = this.props.game

        return (
            
            <div className="game" key={id}>
                <Chip
                    
                    label={title}
                    color="primary"
                    style={this.styles()}
                />
            </div>
            
            
            
        )
    }
}

Game.propTypes = {
    game: PropTypes.object.isRequired
}

export default Game;