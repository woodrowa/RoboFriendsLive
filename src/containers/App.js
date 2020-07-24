import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css"

//Needs to be a class and extend Component when dealing with state
//in a non-state component you just return something
//in a stateful component you render something
//any component using state has the class syntax
//what we call a smart component since it uses state
class App extends Component {
    constructor(props) {
        super(props);//calls the constructor of component
        this.state = {
            //two states: robots and searchfield
                robots: [],
                searchfield: ''
        };
        console.log("constructor");
        //these are the things that can change within our app
        //usually live in the parent component
        //state is passed down as props to components
        //the state is passed down as props to CardList
    }

    componentDidMount() {
        //no arrow function because this method is part of react
        //robots from javascript file
        //we can fetch the user list from this url and set the state of robots to this list
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({ robots: users }));
        //we set te state of robots to the users list from the url
        //fetch is a method on the window object and comes with all browsers
        //window.fetch in browser console
        console.log("componentDidMount");
    }

    onSearchChange = (event) => {
        //anytime you make your own methods on a component use arrow function
        //without the arrow function this would refer to the input where the event takes place
        //makes sure the this value refers to where it was created; App in this case
        //with the event we always have event.target.value
        console.log(event.target.value);
        //this is how we set state
        this.setState({searchfield: event.target.value});
    };
    //anytime input changes we set the state of where the event was triggered
    //which is SearchBox.js input

    //always has a render function that has to return something
    //you have to use this.onSearchChange since this is an object
    render() {
        //we can destructure this.state and just refer to robots and searchfield
        const { robots, searchfield } = this.state;
        //these components that are just pure functions can just render
        //we use the filter function to iterate over robots array which is in state
        //return all robots that match SearchBox input which is in this.state.searchfield
        //filter robot state to include what's in the searchfield
        //and we pass filtered robots instead
        //is an array
        //we destructured into robots and searchfield but it can also be this.state.robots and this.state.searchfield
        //this is cleaner
        const filteredRobots = robots.filter(robot=>{
            //each item we filter through is a robot but can be any word
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        console.log("render");
        //render() will run anytime there is a change in state which triggers an update
        //it goes from an empty array to having the state set with robots list
        //everytime there is an onChange on the input of SearchBox it let's the App.js know to run the onSearchChange function
        //then updates the state of the searchfield to whatever we typed
        //can also be !robots.length
        if(robots.length === 0){
            //if the fetch is taking a long time to get the list we can show a loading h1 when the list is empty or 0
            //this could be a loading bar in a real app
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;