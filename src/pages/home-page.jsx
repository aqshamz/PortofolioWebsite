import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Me from "../assets/Profile.png";


function HomePage() {
    return (
      <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="md:basis-1/2 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl mb-4">About me</h2>
            <p className="text-lg">
              Web Enthusiast. Experienced in PHP programming language with Laravel and Codeigniter 3 frameworks,
              HTML with Bootstrap library, and Javascript with Jquery library.
              Currently studying Full Stack Web Development using ReactJs and NodeJs with ExpressJs framework at Purwadhika Digital Technology School.
            </p>
          </div>
          <div className="md:basis-1/2 flex justify-center">
            <img src={Me} alt="me" className="melogo" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <Link to="education" className="text-center">
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-900 transition-colors duration-300">
              <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />Education
            </button>
          </Link>
          <Link to="experience" className="text-center">
            <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-900 transition-colors duration-300">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />Experience
            </button>
          </Link>
          <Link to="skill" className="text-center">
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-900 transition-colors duration-300">
              <FontAwesomeIcon icon={faLightbulb} className="mr-2" />Skill
            </button>
          </Link>
        </div>
      </div>
      </>
    );
  }
  
  export default HomePage;