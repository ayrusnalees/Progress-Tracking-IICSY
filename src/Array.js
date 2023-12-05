import React from 'react'
import List from './List'
const Array= () => {
    const itemsArray =['Item1','Item 2','Item 3'];
  return (
    <div>
    <h1>Item List Examples</h1>
    <List items={itemsArray}/>
    </div>
  )
}

export default Array
