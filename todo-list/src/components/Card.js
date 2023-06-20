import React from 'react'
 

const Card=(props) =>{
    // const{title,content}=props;
  return (
    <div className="Card">
      {props.children}
      <h1>{props.title}</h1>
      <hr/>
      <br/>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
