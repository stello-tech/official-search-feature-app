import React, { Component } from "react"; //Question: How can react be a component? Isnt it an indepedent app itself?
import SearchBox from './SearchBox';
import CardList from "./CardList";
import { arrOfObj } from "./User";

class App extends Component {

    constructor() {
        super();
        this.state = {
            users : arrOfObj,
            searchField: ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
        console.log(event.target.value);
    }

    render() {
                const filterUsers = this.state.users.filter (users => {
                return users.name.toLowerCase().includes(this.state.searchField.toLowerCase());
                })
		return (
			<div className ='tc'>
				<h1 className="f1"> First React App </h1>
				<SearchBox searchChange={this.onSearchChange}/> 
				<CardList users={filterUsers} />
			</div>
		);
	}
	
}
export default App;

// We're calling the searchBox component through line #28, in which we pass the property 
// searchComponent. The searchChange property calls the function onSearchChange by {this.onSearchChange}.

// The onSearchChange function is refering to line #16 which is giving value to the searchField in line #12.
// The value being the user's input.

// In the rendering function, we are creating another variable filterUsers which recieves the users in line
// #11 (arrOfObj from User.js) and since this.state.users is an array we are using the filter function. At 
// the same time we are also converting user's input to lowercase and including any other searchField.

// Note: Line# 26 tc is for tachyons.
