import { Link } from "react-router-dom";
import Me from "../assets/Profile.png";


function Header() {
  return (
    <header className="bg-blue-900 text-white py-4">
        <Link to="/">
        <div className="container mx-auto flex flex-row items-center justify-center">
          <h1 className="text-2xl">Welcome to Aqsha's Porto</h1>
        </div>
        </Link>
    </header>
  );
}

export default Header;