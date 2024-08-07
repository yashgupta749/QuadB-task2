import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <MdEmail alt="Email icon" class="icon contact-icon email-icon" />
            <p>
              <a href="mailto:guptayash9808@gmail.com">
                guptayash9808@gmail.com
              </a>
            </p>
          </div>
          <div class="contact-info-container">
            <FaLinkedin className="icon contact-icon" />
            <p>
              <a href="http://www.linkedin.com/in/yash-gupta-26277122b">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
