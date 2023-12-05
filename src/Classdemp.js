import React, { Component } from 'react'
import './App.css'
export default class Classdemo extends Component {
    constructor(props)
    {
        super(props);//work for all class
        this.state = {count:0};
    }
    handleDecrement = ()=> 
    {
        
            if(this.state.count>0)
            {
                return (
                   this.setState(prevState =>({count:prevState.count-1}))
                )
            }
            else{
                return(this.setState(prevState => ({count:prevState.count=0})))
            }
        
    }
    handleIncrement = () =>{
        this.setState(prevState => ( {count: prevState.count+1}));
    }
    handleCart = () =>{
        alert (this.state.count+" "+this.props.name+this.props.des+" added successfully");
    }
  render() {
    return (
      <div>
        <table>
        <tbody>
        <tr>
        <td width='100px'><img src={this.props.imgUrl}></img> </td>
        <td width='200px'>{this.props.name}</td>
        <td width='200px'>{this.props.des}</td>
        <td width='200px'> <button onClick={this.handleDecrement} height='50px' width='30px'> - </button>
        {this.state.count}
        <button onClick={this.handleIncrement} height='50px' width='30px'> + </button></td>
        <td width='200px'><button onClick={this.handleCart}>Add to cart</button></td>
        </tr>
        </tbody>
        </table>
      
      </div>
    )
  }
}

