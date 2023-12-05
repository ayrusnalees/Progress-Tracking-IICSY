import React, { Component } from 'react'
import Child from "./Child";
function App(){
    return(
        <div>
        <h1>This is a parent component</h1>
        <ul>
        <li>
        <Child
          colour1="green"
          colour2="blue"
         />
         </li>
         </ul>
         </div>
    );

}
export default App;