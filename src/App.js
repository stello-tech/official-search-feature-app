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
		const filterUsers = this.state.users.filter(users =>{
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