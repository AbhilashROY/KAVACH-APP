import React from "react";
import InfoCards from "./InfoCards";
import "../App.css";
import "../fonts.css";
import HeatMap from "./HeatMap";
function Home() {
  return (
    <React.Fragment>
      <div id="wrapper2">
        <div id="welcome" className="container">
          <div className="title">
            <h2>A real-time crime reporting platform</h2>
          </div>
          <p>
            This is <strong>Kavach</strong>, here you can receive real time media 
            of the crime scene and it gives you critical insights about the criminal topology of different regions.
          </p>
        </div>
      </div>
      <div id="wrapper3">
        <div id="portfolio" className="container">
          <div className="title">
            <h2>Kavach</h2>
            <span className="byline">Our Usecases</span>{" "}
          </div>
          <InfoCards />
        </div>
      </div>
      <div id="footer" className="container">
        <div className="title">
          <h2>Get in touch</h2>{" "}
        </div>
        <ul className="contact">
          <li>
            <a className="icon icon-phone"></a>
          </li>
          <li>
            <a className="icon icon-twitter"></a>
          </li>
          <li>
            <a className="icon icon-youtube-sign"></a>
          </li>
          <li>
            <a className="icon icon-tumblr"></a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Home;
