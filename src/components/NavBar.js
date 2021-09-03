import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="mb-6">
      <Link to="/">
        <img
          className="m-0 m-auto"
          src="https://lyricstranslate.com/files/styles/large/public/Rick_and_Morty_logo.png?itok=5No-A7PV"
          alt="rick and morty"
        />
      </Link>
    </div>
  );
}

export default NavBar;
