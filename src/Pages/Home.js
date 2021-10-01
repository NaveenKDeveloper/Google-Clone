import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="header">
        <div className="header-right">
          <Link to="/gmail">Gmail</Link>

          <Link to="/images">Images</Link>
        </div>
      </div>

      <div className="body">
        <p>home</p>
      </div>

      <div className="footer">
        <Link to="/about">About</Link>

        <Link to="/about">How Search Works</Link>
      </div>
    </div>
  );
}

export default Home;
