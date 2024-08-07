import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoPython } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { MdVerified } from "react-icons/md";
const Skills = () => {
  return (
    <div>
      <section id="experience">
        <h1 class="title">Experience</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h2 class="experience-sub-title">Technical Skills</h2>
              <div class="article-container">
                <article>
                  <IoLogoJavascript alt="Experience icon" class="icon" />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <IoLogoPython alt="Experience icon" class="icon" />
                  <div>
                    <h3>PYTHON</h3>
                    <p>Intermediate</p>
                  </div>
                </article>

                <article>
                  <FaReact class="icon" />
                  <div>
                    <h3>React</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <FaNode className="icon" />
                  <div>
                    <h3>NodeJS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <DiMongodb class="icon" />
                  <div>
                    <h3>MongoDB</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">Soft Skills</h2>
              <div class="article-container">
                <article>
                  <MdVerified className="icon" />
                  <div>
                    <h3>problem-solving</h3>
                  </div>
                </article>
                <article>
                  <MdVerified className="icon" />
                  <div>
                    <h3>Public Speaking</h3>
                  </div>
                </article>
                <article>
                  <MdVerified className="icon" />
                  <div>
                    <h3>TeamWork</h3>
                  </div>
                </article>
                <article>
                  <MdVerified className="icon" />
                  <div>
                    <h3>LeaderShip</h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
