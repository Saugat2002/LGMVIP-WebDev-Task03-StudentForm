/* eslint-disable react/prop-types */
// import React from 'react'
import Student from "./Student"

const StudentList = ({ students }) => {
  return (
    <div className="w-full flex flex-col space-y-10 items-center">
      <span className="text-xl font-bold">Student List</span>
      <div className="w-full ml-24 flex flex-col space-y-3">

        {students.map((student, index) => (
          <Student key={index} student={student} />
        ))}

      </div>
    </div>
  )
}

export default StudentList