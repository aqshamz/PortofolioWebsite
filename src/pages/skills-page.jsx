import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhp, faLaravel, faJs, faReact, faGit, faHtml5, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Tailwind from '../assets/Tailwindcss.svg';
import Jquery from '../assets/Jquerysvg.svg';
import CodeIgniter from '../assets/Codeigniter.svg';
import Express from '../assets/Expresssvg.svg';
import  Go  from '../assets/Go.svg';


function SkillPage() {
  const skills = {
    beginner: [
      { name: 'ReactJS', icon: faReact },
      { name: 'ExpressJS', icon: Express, isImage: true },
      { name: 'TailwindCSS', icon: Tailwind, isImage: true },
    ],
    intermediate: [
      { name: 'Go', icon: Go, isImage: true },
      { name: 'HTML', icon: faHtml5 },
      { name: 'JavaScript', icon: faJs },
      { name: 'jQuery', icon: Jquery, isImage: true },
      { name: 'Bootstrap', icon: faBootstrap },
      { name: 'Laravel', icon: faLaravel },
      { name: 'Git', icon: faGit },
    ],
    advanced: [
      { name: 'PHP', icon: faPhp },
      { name: 'CodeIgniter 3', icon: CodeIgniter, isImage: true },
      { name: 'MySQL', icon: faDatabase },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-gray-200 hover:text-blue-700">&lt; Home</Link>
      <div className="mb-8">
        <h3 className="text-2xl mb-4">Beginner</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.beginner.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.isImage ? (
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
              ) : (
                <FontAwesomeIcon icon={skill.icon} size="4x" className="mb-4" />
              )}
              {/* <FontAwesomeIcon icon={skill.icon} size="4x" className="mb-4" /> */}
              <h3 className="text-xl">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl mb-4">Intermediate</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.intermediate.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.isImage ? (
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
              ) : (
                <FontAwesomeIcon icon={skill.icon} size="4x" className="mb-4" />
              )}
              {/* <FontAwesomeIcon icon={skill.icon} size="4x" className="mb-4" /> */}
              <h3 className="text-xl">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl mb-4">Advanced</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.advanced.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.isImage ? (
                <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-4" />
              ) : (
                <FontAwesomeIcon icon={skill.icon} size="4x" className="mb-4" />
              )}
              {/* <FontAwesomeIcon icon={skill.icon} size="4x" className="mb-4" /> */}
              <h3 className="text-xl">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default SkillPage;
