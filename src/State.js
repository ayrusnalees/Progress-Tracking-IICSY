import React, { Component } from 'react'
export default class State extends Component {
constructor(props){
    super(props);
    this.state={count:0};
}
handleDecrement=()=>{
    this.setState(prevState=>{
        if(prevState.count>0){
            return {
                count:prevState.count-1
            }
        }
        else{
            return{
                count:prevState.count
            }
        }
    });
}
handleIncrement=()=>{
    this.setState(prevState=>{
        return{
            count:prevState.count+1
        }
    });
}
 handle=()=>{
    alert(this.state.count+" added to cart ")
}
  render() {
    return (

      <div>
      <table>
      <tr>
        <td><img src={this.props.imgurl} alt={this.props.item}></img></td>
        <td><h1>{this.props.desc}</h1></td>
         <td><button onClick={this.handleDecrement}>-</button>{this.state.count}
         <button onClick={this.handleIncrement}>+</button></td>
         <td><button onClick={this.handle}>Add to Cart</button></td>
         </tr></table>
      </div>
    )
  }
}
