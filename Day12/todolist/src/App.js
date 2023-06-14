// import Todoform from './components/Todoform';
import './App.css';
import Card1 from './components/Card1';
import Images from './Images/balmain-blazer-review.webp';
import Clock from './components/Clock';
// import TodoList from './components/TodoList';
// import Card1 from './components/Card1';

const App=()=> {
  return (
    <div className='App'>
      <div className='third'>
        <div className='small'>
       <h1><b>Order #647300</b></h1>
       </div>
       <div className='big'>
         <Clock/>
      </div>
     </div>
      <div className='card-container'>
        <div className='container1'>
        <Card1>
          <img src={Images} width="400px;"height="430px;"/>
          
          </Card1> 
        </div>
       <div className='container2'>
        <div className='large'><h1>Button Up Blazer</h1></div>
          <Card1>
         {/* <h1>Button Up Blazer</h1> */}
         <h3><b>Zara</b></h3>
         <div className='container'>
         <div class="color-option">
  <label for="color-picker"><h2>Color : </h2></label>
  <input type="color" id="color-picker"className='color-picker-label' />
</div>
<div class="size-option">
  <label for="size-select"><h2>Size :</h2></label>
  <select id="size-select" class="size-select">
    <option value="small">S</option>
    <option value="medium">M</option>
    <option value="large">L</option>
  </select>
</div>
</div>
<h1>  $48.99</h1>
  </Card1>
  </div>
        
          </div>  
  
      </div>
  
  );
}

export default App;
