// import './App.css';
// import './index.css';
// import React from "react";
import React, { useState } from "react";
import "./App.css";
import Pizza from "./components/Pizza";
import images6 from "./Pictures/img6.jpeg";
import images2 from "./Pictures/img2.jpeg";

import images4 from "./Pictures/img4.jpg";
import images5 from "./Pictures/img5.jpeg";

// import Images from './Images/pepperoni-pizza6+srgb..jpg';
// import Flowers from './components/Flowers';
// import Card from './components/Card';
// import { FaReact,FaApple, FaSmile } from 'react-icons/fa';
// import { TodoWrapper } from './components/TodoWrapper';

// const  App=()=> {

//   return (
//     <div className="App">
//       {/* <TodoWrapper /> */}
//       <h1>Three cards</h1>
//     <div className='card-container'>
//    <Card>
//    <FaApple size={40}/>
//    title="Card 1"
//    content="This is the todolist page."

// </Card>
//     <Card
//    title="Card 2"
//    content="This is the todolist page2.">

//     <FaReact size={40}/>
//    </Card>
//     <Card
//    title="Card 3"
//    content="This is the todolist page3."
//    > <FaSmile size={40}/></Card>
//     </div>
//   //  </div>
//   );
//   };
function App() {
  return (
    <>
      <div className="container">
        <div className="box">
          <Pizza
            images={images5}
            title="Italian pizza with tomatos topping and leaves"
            text="BEST FOR ALL"
            symbol="+"
            price="$25.14"
          />

          <br />

          <Pizza
            images={images2}
            title="Napiletana spicy pizza with mashroom and leaves"
            text="TOP CHOOICE"
            symbol="+"
            price="$55.00"
          />

          <br />
          <Pizza
            images={images6}
            title="Calofonia pizza with leaves and olives"
            text="FOR KIDS"
            symbol="+"
            price="$40.00"
          />

          <br />
          <Pizza
            images={images4}
            title="Italian pizza with tomatos topping and leaves"
            text="BEST IN VEGAN"
            symbol="+"
            price="$25.14"
          />
        </div>
      </div>
    </>
  );
}

export default App;
