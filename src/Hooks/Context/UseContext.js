import React,{useState,createContext,useContext} from 'react'

const UserContext=createContext();

function Context(){
    const[user,setuser]=useState("user");

    return(
       <UserContext.Provider value={user}>
           <h1>{`hello ${user}!`}</h1>
           <Component2 user={user}/>
        </UserContext.Provider>

    );
}

function Component2(){
    const user = useContext(UserContext);

  return (
    <h1>Component 2 is displayed {user}</h1>
  )
}

export default Context;