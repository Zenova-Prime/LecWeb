// src/components/Popup.js
import React, { useState, useEffect } from "react";

const Popup = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // 100ms = 0.1s

    return () => clearTimeout(timer);
  }, []);

  return (
    isOpen && (
      <div
        className="fixed top-0 left-0 w-full h-full bg-orange-100 bg-opacity-50 flex justify-center items-center"
        style={{ zIndex: 1000 }}
      >
        <div
          className="p-5 rounded-lg w-2/3"
          style={{
            maxWidth: "500px", 
            margin: "0 auto", 
            backgroundColor: "#99ffe6",
            animation: "popup 0.5s ease-in-out",
            animationName: {
              "0%": {
                transform: "scale(0.3)",
                opacity: 0,
              },
              "50%": {
                transform: "scale(0.7)",
                opacity: 0,
              },
              "100%": {
                transform: "scale(1)",
                opacity: 1,
              },
            },
          }}
        >
          <div className="flex justify-end mb-4">
            <button
              className="text-pink-600 hover:text-pink-900 transition duration-300 ease-in-out"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="text-center">
          <img
              src="/images/box-telegram.png"
              alt="Telegram logo"
              className="mx-auto my-0"
              width="250"
              height="250"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                marginTop: "-50px",
                marginBottom: "-20px",
                pointerEvents: "none",
                userSelect: "none",
                userDrag: "none",
              }}
            />
            <p className="text-2xl mb-6 text-red-600 font-bold">
              Join our Telegram channel to get the latest updates and new
              content!
            </p>
            <a
              href="https://t.me/ZenovaPrime"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-700 mb-0 text-white font-bold py-2 px-4 rounded"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
