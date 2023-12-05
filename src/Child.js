import React, { Component } from 'react'

export default function Child({colour1,colour2}) {
  
    return (
      <div>
        <h1>This is a child component</h1>
        <h2 style={{color: colour1}}> SKCET</h2>
        <h2 style={{color: colour2}}>SkCET</h2>
      </div>
    )
  }
