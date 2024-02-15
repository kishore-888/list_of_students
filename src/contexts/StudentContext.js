import React, { createContext, useState } from 'react'

  const StudentContext = createContext()

  const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Bharath', isFavourite: false },
    { id: 2, name: 'Kumar', isFavourite: false },
    { id: 3, name: 'Praveen', isFavourite: false },
    { id: 4, name: 'Ramya', isFavourite: false },
    { id: 5, name: 'Monica', isFavourite: false }
  ])
  const [favouriteStudents, setFavouriteStudents] = useState([])

  function addToFavourite(student) 
  {
    const updatedStudents = students.map((s) =>
      s.id === student.id ? { ...s, isFavourite: true } : s
    )
    setStudents(updatedStudents)
    setFavouriteStudents([...favouriteStudents, student])
  }

  function removeFromFavourite(student)
  {
    const updatedStudents = students.map((s) =>
      s.id === student.id ? { ...s, isFavourite: false } : s
    )
    setStudents(updatedStudents)
    setFavouriteStudents(favouriteStudents.filter((s) => s.id !== student.id))
  };

  return (
    <StudentContext.Provider value={{ students, favouriteStudents, addToFavourite, removeFromFavourite }}>
      {children}
    </StudentContext.Provider>
  )
}

export { StudentContext }
export { StudentProvider} 
