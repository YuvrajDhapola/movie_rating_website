import { Link } from "react-router-dom";

import "./navbar.css";
import DarkMode from "../DarkMode/DarkMode";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_links">
        <Link to="/popular">Popular</Link>
        <Link to="/top_rated">Top Rated</Link>
        <Link to="/upcoming">Upcoming </Link>
      </div>
      <DarkMode />
    </nav>
  );
};

export default Navbar;
