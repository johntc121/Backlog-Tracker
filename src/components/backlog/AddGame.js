import React, { Component } from 'react'
import PropTypes from 'prop-types';

class AddGame extends Component {
    state = {
        title: ''
    }

    addGame(title, hours){
        this.props.addGame(title, hours)

    }

    //component state -> not app state
    onChange = (e) => this.setState({
        title: e.target.value
    })

    onSubmit = (e) => {

        
        if(this.state.title !== ''){
            let title = this.state.title;
            
            let howLong = require('howlongtobeat');
            let howLongService = new howLong.HowLongToBeatService();

            howLongService.search(this.state.title).then(res => console.log(res));

            howLongService.search(this.state.title).then(res => this.addGame(res[0].name, res[0].gameplayMain))
            .catch(reason => console.log(reason));
            
            
                //this.props.addGame(this.state.title, res[0].gameplayMain));

            e.preventDefault();

            //this.props.addGame(this.state.title);
            this.setState({title: ''});
        }
        else{
            alert("Please enter a title");
            e.preventDefault();
        }
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Please enter a game"
                    style={{flex: '10', padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                /> 
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />

            </form>
        )
    }
}

AddGame.propTypes = {
    addGame: PropTypes.func.isRequired
}

export default AddGame;
