import React,{useState,useEffect} from 'react'

const Effect = () => {
  
    const[count,setcount]=useState(0);

    useEffect(() =>{
        setTimeout(() => {
            setcount((count)=>count+1);
        }, 1000);
    },[count])
   
  return (
    <div>
    <p>{count} times rendered!!</p>
    
    </div>
  )
}

export default Effect