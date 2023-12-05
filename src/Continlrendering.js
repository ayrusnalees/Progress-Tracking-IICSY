import React,{useState} from 'react';
import Signin from './Signin';
import SignUp from './Signup';
const Conditional = () => {
    const[state,setState]=useState(true)
  return (
    <div>
      {
        state?(<SignUp/>):(<Signin/>)
      }
    </div>
  )
}

export default Conditional
