import React from 'react'
import TodoItem from './TodoItem'
import {ITodo} from '../type'

interface ITodoListProps{
   todos: ITodo[],
   toggleTodo:(id:number) => void,
   removeTodo:(id: number) => void
}

const TodosList:React.FC<ITodoListProps> = ({todos,toggleTodo,removeTodo}) => {
  return (
    <div>
        {todos.map((todo) =>(
                 <TodoItem key={todo.id}
                   toggleTodo={toggleTodo} 
                   removeTodo={removeTodo} 
                   {...todo} />
        ))}
    </div>
  )
}

export default TodosList