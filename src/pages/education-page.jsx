import React from 'react';
import  Binus  from '../assets/Binus.png';
import  Purwadhika  from '../assets/Purwadhika.png';
import { Link } from "react-router-dom";

function EducationPage() {
  const educationList = [
    {
      schoolLogo: Binus,
      course: 'Computer Science',
      grade: '3.02',
      time: 'Sep 2019 - July 2023',
    },
    {
      schoolLogo: Purwadhika,
      course: 'Job Connector Web Development Online Learning',
      grade: '-',
      time: 'April 2024 - Present',
    },
    // Add more job experiences as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-gray-200 hover:text-blue-700">&lt; Home</Link>
      <h2 className="text-3xl mb-8">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationList.map((school, index) => (
          <div key={index} className="flex mb-8">
            <div className="w-16 h-16 mr-4">
              <img src={school.schoolLogo} alt={`Corporate Logo ${index + 1}`} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{school.course}</h3>
              <p className="mb-2">{school.grade}</p>              
              <p className="text-gray-300">{school.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default EducationPage;
