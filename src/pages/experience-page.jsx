import React from 'react';
import  Blog  from '../assets/b-log.jpg';
import  SSA  from '../assets/SSA.jpg';
import { Link } from "react-router-dom";


function ExperiencePage() {
  const jobExperiences = [
    {
      corporateLogo: Blog,
      title: 'Programmer',
      type: 'Internship',
      description: 'Develop Warehouse Management System (WMS) and Assign To Driver (Bitrans) Website based on AxureRP using Bootstrap, Code Igniter 3, MySql, Gitlab and Go with Gin Framework',
      time: 'February 2022 - August 2023',
    },
    {
      corporateLogo: Blog,
      title: 'IT Warehouse Specialist',
      type: 'Contract',
      description: 'Develop Microservices Warehouse Management System (WMS) based on AxureRP using Bootstrap, Code Igniter 3, MySql, Gitlab and Go with Gin Framework as Cronjob',
      time: 'Sep 2023 - December 2023',
    },
    {
      corporateLogo: SSA,
      title: 'Programmer',
      type: 'Contract',
      description: 'Set Project Tracker, Design and Develop  Microservices Warehouse Management System (WMS) based on AxureRP using Bootstrap, Code Igniter 3, MySql, Stored Procedure, Gitlab and Go with Gin Framework as Cronjob And Rest API.',
      time: 'January 2024 - Present',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-gray-200 hover:text-blue-700">&lt; Home</Link>
      <h2 className="text-3xl mb-8">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobExperiences.map((experience, index) => (
          <div key={index} className="flex mb-8">
            <div className="w-32 md:w-48 lg:w-64 h-32 md:h-48 lg:h-64 mr-4">
              <img src={experience.corporateLogo} alt={`Corporate Logo ${index + 1}`} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="text-gray-300 mb-2">{experience.type}</p>
              
              <p className="mb-2">{experience.description}</p>
              <p className="text-gray-300">{experience.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default ExperiencePage;
