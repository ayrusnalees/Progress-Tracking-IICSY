import React, { Component } from 'react'

export default class Errorhandling extends Component {

    constructor(props)
    {
        super(props);
        this.state={hasError:false,error: null ,errorInfo :null}
    }

    static getDerivedStateFromError(error)
    {
        return{hasError:true};
    }

    componentDidCatch(error,errorInfo){
        this.state({error,errorInfo});
        console.error("Error caught by error boundary:",errorInfo);
    }
  render() {
    return (
      <div></div>
    )
  }
}
