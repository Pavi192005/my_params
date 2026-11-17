import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Student from './Components/Student'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/student/:id' element={<Student/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
