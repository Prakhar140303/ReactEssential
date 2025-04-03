// import { useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/addTodo'

function App() {

  return (
    <div >
      <h1>Learning about redux toolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
