import React from "react";
import { Figure } from "react-bootstrap";
import "./About.css";
import Image from "../../Images/about-me.png";


const About = () => {
  return (
    <div className="row mt-5">
      <div className=" col-sm-12 jumbotron">
        <h1 className="about-me">About Me</h1>
        <hr className="my-4" />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Figure>
                <Figure.Image
                  id="about-me-pic"
                  src= {Image}
                  alt="Crystal Watkins"
                  fluid
                />
              </Figure>
            </div>
            <div className="col-sm-9">
              <section>
                <p id="portfolio-text1">
                  My name is Crystal Watkins and I graduated from the full stack flex program 
                  through Georgia Tech as of August 2020. I have a background in sales and logistics,
                  having managed teams of up to 140 people. I'm a former college athlete where I was able to
                  play tennis at Florida Southern College. I am a hard-working, team
                  player who is excited to continue to learn and develop skills in the field. I am fluent in 
                  React, Javascript, Node.js, JQuery, Front End Development, MySQL, and MongoDB. Please see all contact 
                  information below and previous projects under the Portfolio tab!
                </p>
                <br/>
                <p className="contactInfo">Cell: 404-276-4570</p>
                <p className="contactInfo">Email: crystalwatkins428@gmail.com </p>
                <br/>
                <a className="links" href="https://github.com/CrystalWatkins">
                  Github Portfolio
                </a>
                <br></br>
                <a className="links" href="https://docs.google.com/document/d/1GtaV4HUIka1-Qmk79owiyI_0hQPaIFOEnv7b9U0_XG8/edit?usp=sharing">
                  Resume
                </a>
                <br></br>
                <a
                  className="links"
                  href="https://www.linkedin.com/in/crystalwatkins1/"
                >
                  LinkedIn
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
