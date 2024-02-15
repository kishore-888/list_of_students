import React, { useContext } from 'react'
import { StudentContext } from '../contexts/StudentContext'

function FavouriteStudents() {
  const { favouriteStudents, removeFromFavourite } = useContext(StudentContext)

  function handleRemoveFromFavourite(student) {
    removeFromFavourite(student)
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Favourite Students</h1>
      <ul>
        {favouriteStudents.map((student) => (
          <li key={student.id} className="flex justify-between items-center mb-2">
            <span>{student.name}</span>
            <button
              onClick={() => handleRemoveFromFavourite(student)}
              className="ml-2 px-4 py-1  border rounded-md bg-red-500 text-white"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FavouriteStudents
