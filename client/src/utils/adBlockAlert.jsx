
import React, { useEffect, useState } from "react";

const AdBlockDetector = () => {
  const [adBlockDetected, setAdBlockDetected] = useState(false);

  useEffect(() => {
    const detectAdBlock = async () => {
       // Detect ad blocker using a bait URL
    fetch("https://connect.facebook.net/en_US/fbevents.js", {
      method: "GET",
      mode: "no-cors",
    })
      .then(() => {
        console.log("Resource loaded successfully. No ad blocker detected.");
        setAdBlockDetected(false);
      
      })
      .catch(() => {
        console.log("Ad blocker detected.");
        setAdBlockDetected(true);
      // Disable all input fields
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
          input.setAttribute("disabled", "");
      });
      });
    };

    detectAdBlock();
  }, []);

  return (
    <div>
      {adBlockDetected && (
        <div style={{ color: "red", fontWeight: "bold" }}>
          Ad blocker detected. Please disable it and reload the page to continue. <br/>
        </div>
      )}
    </div>
  );
};

export default AdBlockDetector;
