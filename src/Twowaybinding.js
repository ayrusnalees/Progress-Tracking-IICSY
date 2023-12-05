import React, { Component } from "react";
class TwoWayBindingComponent extends Component {
 constructor(props) {
 super(props);
 this.state = { inputValue: "" }; // Initialize the state
 }
 handleInputChange = (event) => {
 this.setState({ inputValue: event.target.value }); // Update state on change
 };
 render() {
 return (
 <div style={{ textAlign: "center", margin: "20px" }}>
 <textarea
 style={{
 width: "300px",
 height: "100px",
 padding: "10px",
 fontSize: "16px",
 border: "1px solid #ccc",
 borderRadius: "4px",
 marginBottom: "10px",
 }}
 value={this.state.inputValue}
 onChange={this.handleInputChange}
 />
 <p style={{ fontSize: "18px", color: "#333" }}>
 Current Value: {this.state.inputValue}
 </p>
 </div>
 );
 }
}
export default TwoWayBindingComponent;

