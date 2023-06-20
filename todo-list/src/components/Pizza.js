import React from 'react'

const Pizza = (props) => {
  return (
    
     <div className='container1'>
        <div className='content'>
         <div className='img'>
          <img src={props.images}alt='' height={"165px;"}></img>
          </div>
          <div className='title'>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
          </div>
          <div className='price'>
          <p>{props.symbol}</p>
          <h4>{props.price}</h4>
          </div>
         </div>
         <hr class="light-hr"></hr>
     </div>
    
    
  )
}

export default Pizza


// const name= (a)=>a== 'mabisha'? true:false
// const names=['mabisha','anita','pushpa','poonam']
// function checkTheName(arr,val){
//    return arr.some(arrVal=>val===)
// }