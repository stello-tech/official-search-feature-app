import React, { Component } from "react"; //Question: How can react be a component? Isnt it an indepedent app itself?
import SearchBox from './SearchBox';
import CardList from "./CardList";
// import { arrOfObj } from "./User";
import Scroll from './Scroll';

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

    onSearchChange = (event) => {
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
                    <Scroll>
                        <CardList users={filterUsers}/>
                    </Scroll>
                </div>
            );
        }     
    }
}
export default App;

// Line #48-50 is recieving property from Scroll.js because <Scroll> is not a self closing component
// Therefore, we have a child component inside it, CardList component will be given to Scroll component
// as 'props', which is accessed through props.children (also an array of 10 objects.)
