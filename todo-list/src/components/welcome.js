import React from 'react'

// function welcome() {
    const welcome=(props)=>{

    
  return (
    <div>
      <h1>Welcome ,{props.name}!</h1>
      <p>{props.message}</p>
    </div>
  );
};


export default welcome;
