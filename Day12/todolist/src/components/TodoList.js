import React,{useState} from 'react'
import Todoform  from './Todoform'
import todo from './todo';
function TodoList() {
    const{todos,setTodos}=useState([]);

    const addTodo=todo=> {
 if(!todo.text || /^\$*$/.test(todo.text)){
 return;
 }
  const newTodos =[todo,...todos];

  setTodos(newTodos); 
//  console.log(...todos);
};
const removeTodo=id=>{
    const removeArr=[...todos].filter(todo=>todo.id !==id);

    setTodos(removeArr);
};

const updatedTodo = (todoId,newValue)=>{
  if(!todo.text || /^\s*$/.test(todo.text)){
    return;
  }
  setTodos(prev => prev.map(item=> (item.id === todoId ? newValue : item)));
};

const completeTodo=id=>{
    let updatedTodos = todos.map(todo=>{
        if(todo.id=== id){
            todo.isComplete=!todo.isComplete;
        }
        return todo;
    });
    setTodos(updatedTodos);
}
        
return(
    <div>
      <h1>What's the plan for Today?</h1>
      <Todoform onSubmit={addTodo}/>
      <todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>
    </div>
);
} 

export default TodoList
