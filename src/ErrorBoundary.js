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
}