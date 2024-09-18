// This file was made in devlopement, not needed after so removed from site.
// To make it visible on site, just remove '//' from line 4 & 146 in App.js file.

import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true); // Show banner if consent not given
    }
  }, []);

  const handleAccept = () => {
    // Store consent in local storage
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const handleDecline = () => {
    setShowConsent(false);
    alert("Some features may not work properly without cookies.");
  };

  if (!showConsent) {
    return null; // Don't show banner if consent is already given
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between">
      <p className="text-sm">
        We use cookies to improve your experience. By using our site, you agree
        to our cookie policy.
      </p>
      <div>
        <button
          onClick={handleAccept}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
