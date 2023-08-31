/* eslint-disable react/prop-types */
// import React from 'react';
const Student = ({ student }) => {
    return (
        <div className='flex space-x-5'>
            <div className='flex flex-col'>
                <p>Name: {student.name}</p>
                <p>Email: {student.email}</p>
                <p>Website: {student.website}</p>
                <p>Gender: {student.gender}</p>
                <p>Skills: {student.skills.join(', ')}</p>
                <hr />
            </div>
            <img src={student.imageLink} alt="IMG" width={300} height={300} />
        </div>
    );
};

export default Student;
