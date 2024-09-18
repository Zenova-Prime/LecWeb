// src/components/Header.js
import React from "react";

const Header = () => (
  <header className="text-center mb-8">
    <img
      src="https://te.legra.ph/file/a30f30e46ef1e58270ab2.jpg"
      alt="Zenova Logo"
      className="mx-auto mb-4 w-24 h-24 rounded-full"
    />
    <h1
      className="text-4xl font-bold header-title"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      Zenova Lectures
    </h1>
    <p
      className="text-lg mt-2"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      Empowering Your Learning Journey
    </p>
  </header>
);

export default Header;
