import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
    const todos = useSelector(state => state.todos);
    console.log(todos);
    const dispatch = useDispatch();
  return (
    <>
    <div>Todos</div>
    <ul>
        {todos.map((todo) =>(
            <li key={todo.id}>
                <span className="text-lg">{todo.text}</span>
                <button
                className="ml-4 bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-md transition duration-200"
                onClick={()=>dispatch(removeTodo(todo.id))}
                >X</button>
            </li>
        ))}
    </ul>
    </>
  )
}

export default Todos