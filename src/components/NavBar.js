import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <Link
        to="/"
        style={{
          color: "#fff",
          fontSize: "32px",
          fontFamily: "'Montserrat', sans-serif",
          margin: "10px 0 0 30px",

        }}
      >
        {" "}
        ← {" "}
      </Link>
    </div>
  );
};
