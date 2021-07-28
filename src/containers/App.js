import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component{
    constructor() {
        super();
        this.state = {
            robots:[],
            searchfield:''
        }
    }
    /*Receive the information of the robots from API*/
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots:users}))
    }

    /*This function is change the state of the searchfieald to be the current input of the searchfield*/
    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value}) //Take the text from searchfield textbox and save it on searchfield variable
    }

    /*Lines 22-24 is filtered the robots as the incoming text from the searchfield variable
    and return array of the robots are feets*/
    render(){
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} /> {/* filteredRobots include the robots that match to the textfield input*/}
                </Scroll>
            </div>
        );
    }
    }

export default App;