import React from 'react'
import { ITodo } from '../type'
import './TodoItem.scss'

interface ITodoItemProps extends ITodo{
    toggleTodo: (id: number) => void,
    removeTodo: (id: number) => void
}
const TodoItem:React.FC<ITodoItemProps> = (props) => {
    const {id, title, completed,removeTodo, toggleTodo} = props;
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <label>
       <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
       <span style={{paddingBottom:'8px'}}></span>
       </label>
       <div className={completed ? 'titleLine' : 'none'} style={{fontSize: '25px'}}>{title}</div>
       <button style={{color:'red',margin:'8px',padding:'5px'}} onClick={() => removeTodo(id)}>&times;</button>
    </div>
  )
}

export default TodoItem