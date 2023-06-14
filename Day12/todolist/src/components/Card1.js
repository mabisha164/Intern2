import React from 'react'

const Card1=({title,content,children})=> {
  return (
    
    <div className='Card1'>
     {children}
     
  <h1>{title}  </h1>  
  <h1>{content}</h1>   
    </div>
   
  );
};

export default Card1
