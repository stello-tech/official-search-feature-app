import React, { Component } from "react"; //Question: How can react be a component? Isnt it an indepedent app itself?
import SearchBox from './SearchBox';
import CardList from "./CardList";
// import { arrOfObj } from "./User";

class App extends Component {

    constructor() {
        super();
        this.state = {
            users : [],
            searchField: ''
        }
        console.log("1. Constructor Method: Constructor life cycle hook runs first.")
    }

    componentDidMount(){
        console.log("4. componentDidMount Method: Constructor life cycle hook runs fourth.");
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => {
            return Response.json();
        }).then(users => {
            this.setState({users:users});
        })
    }

    onSearchChange = (event) =>{
        this.setState({searchField: event.target.value});
        console.log(event.target.value);
    }

    render() {
        const {users, searchField} = this.state;
        console.log("3. Render Method: Constructor life cycle hook runs third.")
        const filterUsers = users.filter (users => {
            return users.name.toLowerCase().includes(searchField.toLowerCase());
        })

        if (users.length === 0){
            return <h1>User not found, try again.</h1>
        }
        
        else{
            return (
                <div className ='tc'>
                    <h1 className="f1"> First React App </h1>
                    <SearchBox searchChange={this.onSearchChange}/> 
                    <CardList users={filterUsers} />
                </div>
            );
        }     
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
