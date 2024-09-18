// src/components/Footer.js
import React from "react";

const Footer = () => (
  <footer className="text-center mt-8">
    <h2
      className="text-2xl font-bold contact-title mb-4"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      Contact Us
    </h2>
    <p>
    <span className="text-green-200">Email:</span>{" "}
      <a
        href="mailto:primezenova@gmail.com"
        className="text-indigo"
        style={{ fontFamily: "Montserrat, sans-serif", color: "blue"}}
      >
        primezenova@gmail.com
      </a>
    </p>
    <div className="mt-4">
      <a
        href="https://t.me/ZenovaPrime"
        className="text-white mx-2"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: "Montserrat, sans-serif", color: "blue" }}
      >
        Channel
      </a>
      <a
        href="https://t.me/Jee_Lecture_bot"
        className="text-white mx-2"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: "Montserrat, sans-serif", color: "blue" }}
      >
        LectureBot
      </a>
      <a
        href="https://t.me/The_Lectures_bot"
        className="text-white mx-2"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: "Montserrat, sans-serif", color: "blue" }}
      >
        Companion
      </a>
    </div>
    <p className="mt-4 text-sm text-green-200">
      If you are the owner of any content on this site and would like it
      removed, please contact us at primezenova@gmail.com.
    </p>
  </footer>
);

export default Footer;
