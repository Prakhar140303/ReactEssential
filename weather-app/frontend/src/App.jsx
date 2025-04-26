// import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className='flex flex-col gap-4'>
      <header className='bg-slate-400 h-16'>header</header>
      <Routes>
        <Route path='/' element={<h1>Home</h1>}></Route>
        <Route path='/about' element={<h1>About</h1>}></Route>
        <Route path='/contact' element={<h1>Contact</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App
