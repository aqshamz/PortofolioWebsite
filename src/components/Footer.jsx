import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-4 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="flex-initial basis-full md:basis-2/5 text-center md:text-left mb-4 md:mb-0">
            Visit my Profile Here
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/aqshamz/" target="_blank" className="hover:text-gray-300"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
            <a href="https://github.com/aqshamz" target="_blank" className="hover:text-gray-300"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
            <a href="http://gitlab.b-log.id/aqsha" target="_blank" className="hover:text-gray-300"><FontAwesomeIcon icon={faGitlab} size="2x" /></a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;