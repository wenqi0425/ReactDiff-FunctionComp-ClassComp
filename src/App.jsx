import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import FunctionComponent from './function/function'
import ClassComponent  from './class/class'

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Link to="/"> Function Component </Link>  |  {' '}
          <Link to="/class">Class Component</Link>
        </div>
        <Routes>
          <Route path="/" element={<FunctionComponent />} />
          <Route path="/class" element={<ClassComponent />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
