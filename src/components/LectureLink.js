// src/components/LectureLink.js
import React from "react";

const LectureLink = ({ link, onBack }) => (
  <div className="flex flex-col items-center">
    <h2
      className="text-2xl font-bold header-title mb-4"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      Lecture Link
    </h2>
    <a
      href={link}
      className="bg-green-500 p-4 rounded-md text-center"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: "1.25rem",
      }}
    >
      <span className="button-text">Go to Lecture 🎥</span>
    </a>
    <button
      className="mt-4 bg-red-500 p-2 rounded-md"
      onClick={onBack}
      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem" }}
    >
      Back 🔙
    </button>
  </div>
);

export default LectureLink;
