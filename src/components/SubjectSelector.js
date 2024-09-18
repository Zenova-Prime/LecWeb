// src/components/SubjectSelector.js
import React from "react";

const SubjectSelector = ({ subjects, onSelect }) => (
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {subjects.map((subject) => (
      <button
        key={subject}
        className="bg-blue-800 p-6 rounded-md text-center truncate animated-border"
        onClick={() => onSelect(subject)}
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.25rem",
        }}
      >
        <span className="button-text">
          {subject.charAt(0).toUpperCase() + subject.slice(1)} 📚
        </span>
      </button>
    ))}
  </div>
);

export default SubjectSelector;
