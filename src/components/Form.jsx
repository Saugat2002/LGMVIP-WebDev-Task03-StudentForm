/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";

const Form = ({ addStudent }) => {
    const [studentData, setStudentData] = useState(
        {
            name: '',
            email: '',
            website: '',
            imageLink: '',
            gender: 'male',
            skills: [],
        });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (studentData.name != "") {
            addStudent(studentData);
        }
        console.log('Student data submitted:', studentData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setStudentData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    const handleSkillsChange = (e) => {
        const { value, checked } = e.target;
        setStudentData((prevData) => {
            if (checked) {
                return { ...prevData, skills: [...prevData.skills, value] };
            } else {
                return {
                    ...prevData,
                    skills: prevData.skills.filter((skill) => skill !== value),
                };
            }
        });
    };
    return (
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-full'>
            <div className="flex space-x-2 justify-between">
                <label>Name:</label>
                <input type="text"
                    name="name"
                    value={studentData.name}
                    onChange={handleChange}
                    className="border-2 border-black rounded-md focus:bg-gray-200 w-full" />
            </div>
            <div className="flex space-x-2 justify-between">
                <label>Email:</label>
                <input name="email"
                    value={studentData.email}
                    onChange={handleChange}
                    className="border-2 border-black rounded-md focus:bg-gray-200 w-full" />
            </div>
            <div className="flex space-x-2 justify-between">
                <label>Website:</label>
                <input
                    name="website"
                    value={studentData.website}
                    onChange={handleChange}
                    className="border-2 border-black rounded-md focus:bg-gray-200 w-full" />
            </div>
            <div className="flex space-x-2 justify-between">
                <label>Image Link:</label>
                <input
                    name="imageLink"
                    value={studentData.imageLink}
                    onChange={handleChange}
                    className="border-2 border-black focus:bg-gray-200 rounded-md w-full"
                />
            </div>
            <div className="flex space-x-2">
                <label>Gender:</label>
                <label>
                    <input type="radio"
                        name="gender"
                        value="male"
                        checked={studentData.gender === 'male'}
                        onChange={handleChange} />
                    Male</label>
                <label>
                    <input type="radio"
                        name="gender"
                        value="female"
                        checked={studentData.gender === 'female'}
                        onChange={handleChange} />
                    Female
                </label>
            </div>
            <div className="flex flex-col space-x-5 space-y-2">
                <div>
                    <label htmlFor="skills">Skills:</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="skills"
                        value="Python"
                        checked={studentData.skills.includes('Python')}
                        onChange={handleSkillsChange} />
                    <label htmlFor="python">Python</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="skills"
                        value="Java"
                        checked={studentData.skills.includes('Java')}
                        onChange={handleSkillsChange} />
                    <label htmlFor="java">Java</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        name="skills"
                        value="C++"
                        checked={studentData.skills.includes('C++')}
                        onChange={handleSkillsChange} />
                    <label htmlFor="c++">C++</label>
                </div>
            </div>

            <button type="submit" className=" w-fit border-2 border-black hover:scale-105 transition-all py-1 px-2 rounded-md hover:bg-gray-200">Submit</button>
        </form>
    )
}

export default Form