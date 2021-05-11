import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import InfoIcon from "@material-ui/icons/Info";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import SurgeLogo from "../../assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navheader">
        <div className="navheader__icons">
        <Link to="/" className="navheader__icon">
            <HomeIcon />
            <p>Home</p>
          </Link>
          <Link to="/courses" className="navheader__icon">
            <LocalLibraryIcon />
            <p>Courses</p>
          </Link>
          </div>
          <img  src={SurgeLogo} alt="Surge Logo"></img>
          <div className="navheader__icons">
          <Link to="/about" className="navheader__icon">
            <InfoIcon />
            <p>Raman</p>
          </Link>
          <Link to="/auth" className="navheader__icon">
            <AssignmentIndIcon />
            <p>Sign Up</p>
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;
