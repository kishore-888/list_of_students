import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { StudentProvider } from './contexts/StudentContext'
import ListOfStudents from './components/ListOfStudents'
import FavouriteStudents from './components/FavouriteStudents'
import "./index.css"


function App() {
  return (
    <BrowserRouter>
    <StudentProvider>
    <div className="flex justify-center items-start">
    <div className="container w-80  p-4">
          <nav className="flex justify-between mb-4">
            <Link to="/" className="bg-red-500 p-2 text-white underline">List of Students</Link>
            <Link to="/favourites" className="bg-red-500 p-2 text-white underline">Favourite Students</Link>
          </nav>
        <Routes>
          <Route exact path="/" element={<ListOfStudents />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Routes>
      </div>
      </div>
    </StudentProvider>
  </BrowserRouter>
  )
}

export default App
