import './App.css'
import Form from './components/Form'
import StudentList from './components/StudentList'
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <>
      <h1 className='flex justify-center text-3xl font-bold pb-5 pt-5 bg-slate-400'>Student Enrollment Form</h1>
      <div className='flex justify-between mx-10 mt-10'>
        <Form addStudent={addStudent}></Form>
        <StudentList students={students}></StudentList>
      </div>
    </>
  )
}

export default App
