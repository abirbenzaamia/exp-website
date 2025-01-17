import React, { useState, useEffect } from "react";

const BrowserTypeDetector = () => {
  const [browser, setBrowser] = useState("unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (/chrome|chromium|crios/i.test(userAgent) && !/edge|edg/i.test(userAgent)) {
      setBrowser("Chrome");
    } else if (/safari/i.test(userAgent) && !/chrome|chromium|crios/i.test(userAgent)) {
      setBrowser("Safari");
    } else if (/firefox|fxios/i.test(userAgent)) {
      setBrowser("Firefox");
    } else if (/edge|edg/i.test(userAgent)) {
      setBrowser("Edge");
    } else if (/opera|opr/i.test(userAgent)) {
      setBrowser("Opera");
    } else {
      setBrowser("Unknown");
    }
  }, []);

  
  return (
    <div>
      <h1>Current Browser: {browser}</h1>
      <h1>Your user agent is: {navigator.userAgent}</h1>
    </div>
  );
};

export default BrowserTypeDetector;
