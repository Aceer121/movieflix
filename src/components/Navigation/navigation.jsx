import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <movie className="logo" style={{ width: "50px", height: "50px" }} />{" "}
          {/* Ensure the SVG has dimensions */}
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
