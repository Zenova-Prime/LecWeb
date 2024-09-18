// src/components/ChapterSelector.js
import React from "react";

const ChapterSelector = ({ chapters, onSelect, onBack }) => (
  <div className="flex flex-col items-center">
    <h2
      className="text-2xl font-bold header-title mb-4"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      Select a Chapter
    </h2>
    <div className="overflow-y-auto max-h-64 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {chapters.map((chapter) => (
        <button
          key={chapter}
          className="bg-blue-800 p-6 rounded-md text-center truncate animated-border"
          onClick={() => onSelect(chapter)}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "1.25rem",
          }}
        >
          <span className="button-text">{chapter} 📖</span>
        </button>
      ))}
    </div>
    <button
      className="mt-4 bg-red-500 p-2 rounded-md"
      onClick={onBack}
      style={{ fontFamily: "Montserrat, sans-serif", fontSize: "1rem" }}
    >
      Back 🔙
    </button>
  </div>
);

export default ChapterSelector;
