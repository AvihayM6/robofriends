import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component{
    constructor() {
        super();
        this.state = {
            robots:robots,
            searchfield:''
        }
    }

    /*This function is change the state of the searchfieald to be the current input of the searchfield*/
    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value})
    }

    /*Lines 22-24 is filtered the robots as the incoming text from the search field 
    and return array of the robots are feets*/
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} /> {/* filteredRobots include the robots that match to the textfield input*/}
            </div>
        );
    }
    }

export default App;