import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        //props is to allow access to this.props in the
        //constructor which we end up not needing
        super(props);
        this.state = {
            hasError: false
        }
    }

    //like the try catch block in javascript
    //if anything errors out it will run this lifecycle hook
    //if this method gets triggered it will set hasError to true
    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    //we're gonna wrap ErrorBoundary around a component
    //such as CardList component
    //if component fails, we can catch in ErrorBoundary
    //more for production apps
    render() {
        //if this.state.hasError is true and there is an error
        if(this.state.hasError){
            return <h1>Oooops. That is not good.</h1>
        }
        //props.children is anything in between ErrorBoundary like CardList in this case
        return this.props.children;
    }
}

export default ErrorBoundary;