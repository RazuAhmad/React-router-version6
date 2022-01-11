import React from "react";
import "./HeaderLink.css";
import { Link } from "react-router-dom";

const HeaderLink = () => {
  return (
    <div className="headerStyle">
      <ul>
        <li>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/see-details">
            <button>See Details</button>
          </Link>
        </li>
        <li>
          <Link to="/personal-profile">
            <button>Personal Profile</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLink;
