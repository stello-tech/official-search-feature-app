import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = {
            hasError: false
        } 
    }
    componentDidCatch(error, info){
        console.log("componentDidCatch run successful!");
        this.setState({hasError: true})
    }
    render(){
        if(this.state.hasError){
            console.log("Program running...");
            return <h1>Oops! Something happened, we'll be back shortly.</h1>
        }
        console.log("Render run successful");
        return this.state.children;
    }
}

export default ErrorBoundary;