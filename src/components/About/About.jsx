import React from "react";
import experience from "../../assets/education.png";
import education from "../../assets/experience.png";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <h1 className="title">About</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience icon" class="icon" />
              <h3>Coding Stats</h3>
              <p>
                3 Star at CodeChef <br /> 500+DSA problem-solving
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                Bachelor of Technology <br />
                Electronics and Communication Engineering
                <br />
                IET Lucknow
              </p>
            </div>
          </div>
          <div class="text-container">
            <p>
              Hey there! I'm Yash Gupta, Currently pursuing my Bachelor of
              Technology at the Institute of Engineering and Technology, I've
              been consistently pushing boundaries in both academics and
              projects. With a solid track record including an impressive 8.1
              CGPA and a whopping 90% in CBSE Class XII, I'm dedicated to
              achieving excellence in everything I do. I'm well-versed in
              various programming languages like C/C++, Python, javascript and
              more. From creating dynamic projects like Lets talk and
              Crypto-Tracker to excelling in competitive coding on platforms
              such as CodeChef and geeksforgeeks, I thrive on challenges that
              push my technical skills to the limit. With a knack for
              problem-solving and strong leadership abilities, I'm always ready
              to take on new opportunities and contribute meaningfully to any
              technical project. Let's connect and explore exciting
              possibilities together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
