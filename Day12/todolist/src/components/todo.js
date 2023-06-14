import React,{useState} from 'react'
import Todoform from './Todoform';
import{RiCloseCircleLine} from 'react-icons/ri'
function todo({todos,completeTodo,removeTodo }) {
    const[edit,setEdit]=useState({
        id:null,
        value:''
    });

  return TodoList.map((todo,index)=>(
   <div className={todo.isComplete ? 'todo-row complete':'todo-row'} 
   key={index}>
    <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
        {TodoList.text}
    </div>
   <div className="icons">
    <RiCloseCircleLine   
    onClick={()=> removeTodos(todos.id)}
    className='delete-icon '
    />
    <TiEdit
     onClick={()=>removeTodo(todo.id)}
    className='delete-icon'
    />
    
   </div>
    </div>
  ))
  
}

export default todo
