import React, { Component } from 'react'
import PropTypes from 'prop-types';


import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import ps4logo from '../../ps4logo.jpeg';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




class Game extends Component {
    

    getStyle = () => {
        return{
            background: 'green',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        }
    }

    

    ChipStyles = () => {
        return {
            width: 200
        }
    }

    backGroundStyle = () => {
        // let color;
        // if (this.props.game.notStarted === true) {
        //     color = 'red'
        // }
        // else if (this.props.game.inProgress === true) {
        //     color = 'orange'
        // }
        // else if (this.props.game.completed === true) {
        //     color = 'green'
        // }

        // return {
        //     background: color
        // }
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    handleChange = (id) => {
        //this.setState( () => {this.props.game.notStarted = !this.props.game.notStarted})
        console.log(this.props.game.notStarted);
    }


    render() {
        let {id, title, hours, completed} = this.props.game

        if(completed) {
            hours = 0;
        }
        

        return (
            
            <div className="game" key={id} style={this.backGroundStyle()}>
                <Chip
                    
                    label={title}
                    color="primary"
                    style={this.ChipStyles()}
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            onChange={this.props.notStarted.bind(this, id)}
                            checked={this.props.game.notStarted} 
                        />
                    }
                    label="Not Started"
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            onChange={this.props.inProgress.bind(this, id)}
                            checked={this.props.game.inProgress}
                        />
                    }
                    label="In Progress"
                />
                
                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            onChange={this.props.markCompleted.bind(this, id)}
                            checked={this.props.game.completed}
                        />
                    }
                    label="Completed"
                />
                <div className="gameHours">
                    How Long To Beat {title}: {hours} 
                </div>

                
            </div>
            
            
            
        )
    }
}

Game.propTypes = {
    game: PropTypes.object.isRequired,
    markCompleted: PropTypes.func.isRequired,
    inProgress: PropTypes.func.isRequired,
    notStarted: PropTypes.func.isRequired
}

export default Game;