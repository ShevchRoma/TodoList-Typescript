import React from 'react';
import './App.css';
import {ITodo} from './type'
import TodosList from './components/TodosLIst';

const App:React.FC = () => {
    const [todos, setTodos] = React.useState<ITodo[]>([])
    const [value, setValue] = React.useState('')
 
    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
          setValue(e.target.value)
    }
    const onKeyDownHandler: React.KeyboardEventHandler<HTMLInputElement> = (e) =>{
          if(e.key === 'Enter'){
            onAddTodo()
          }
    }
    const onAddTodo = () =>{
      if(value.trim() === ''){
        alert('Строка пустая,заполните поле')
      }else{
         setTodos([
          ...todos,
          {
            id: Date.now(),
            title: value,
            completed: false
          }
         ])
         setValue('')
        }
    }
    const toggleTodo = (id:number):void =>{
      setTodos(todos.map(todo =>{
        if(todo.id !== id){
          return todo
        }else{
          return{
            ...todo,
            completed: !todo.completed
          }
        }
      }))
    }
  const removeTodo = (id:number): void =>{
      setTodos(todos.filter(todo => todo.id !== id))
  }

 return (
   <div className="wrapper">
     <div className="body">
       <div className="body__title">
         <h2>Todos</h2>
       </div>
       <div className="body__form">
      <input onChange={handleOnChange} value={value} onKeyDown={onKeyDownHandler} placeholder="Enter your todo" />
      <div style={{alignSelf:'center'}}>
      <button onClick={onAddTodo}>Add</button>
      </div>
      </div>
      <div className="body__todoList">
      <TodosList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      </div>
      </div>
   </div>
 )
}

export default App;
