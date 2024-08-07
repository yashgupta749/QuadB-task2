import React from "react";
import chat from "../../assets/projects_pic/chat_app.png";
import crypto from "../../assets/projects_pic/crypto-tracker.png";
import parmarth from "../../assets/projects_pic/parmarh.png";
import todo from "../../assets/projects_pic/todo.png";

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <p class="section__text__p1">Browse My Recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container color-container">
              <div class="article-container">
                <img src={chat} alt="Project 1" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Lets_talk</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/yashgupta749/Lets_talk'"
                >
                  Github
                </button>
              </div>
            </div>

            <div class="details-container color-container">
              <div class="article-container">
                <img src={crypto} alt="Project 3" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Crypto-Tracker</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/yashgupta749/crypto_tracker'"
                >
                  Github
                </button>
              </div>
            </div>
          </div>

          <div class="about-containers">
            <div class="details-container color-container">
              <div class="article-container">
                <img src={parmarth} alt="Project 4" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Social Website</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/Parmarth-IET-Lucknow/parmarth'"
                >
                  Github
                </button>
              </div>
            </div>

            <div class="details-container color-container">
              <div class="article-container">
                <img src={todo} alt="Project 5" class="project-img" />
              </div>
              <h2 class="experience-sub-title project-title">Todo App</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/yashgupta749/javascript-notes/tree/main/projects/Todo_App'"
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
