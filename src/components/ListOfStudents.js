import React, { useContext } from 'react'
import { StudentContext } from '../contexts/StudentContext'

const ListOfStudents = () => {
  const { students, addToFavourite } = useContext(StudentContext)

  const handleAddToFavourite = (student) => {
    addToFavourite(student);
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">List of Students</h1>
      <ul>
        {students.map((student,index) => (
          <li key={student.id} className="flex justify-between items-center mb-2">
            <span>{student.name}</span>
            <button
              onClick={() => handleAddToFavourite(student)}
              disabled={student.isFavourite}
              className={`ml-2 px-4 py-1 border rounded-md ${student.isFavourite ? 'bg-gray-400' : 'bg-black text-white '}`}
            >
              Add to Favourite
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListOfStudents
