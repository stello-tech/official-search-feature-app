import React, { Component } from "react"; //Question: How can react be a component? Isnt it an indepedent app itself?
import SearchBox from './SearchBox';
import CardList from "./CardList";

class App extends Component {

    render() {
        return (
            <div className="tcc">
                <h1 className="fra">First React App</h1>
                <SearchBox searchChange = {this.onSearchTrigger}/>
                <CardList users={filterUsers} 
            </div>
        );
    }
}