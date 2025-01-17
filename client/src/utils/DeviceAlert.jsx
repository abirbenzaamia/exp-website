
import React, { useEffect, useState } from "react";

const DeviceDetector = () => {
    const [device, setDevice] = useState("");

  useEffect(() => {
    function detectDeviceType() {
        const userAgent = navigator.userAgent;
      
        if (/Mobi|Android/i.test(userAgent)) {
            setDevice("Mobile");
        } else if (/iPad|Tablet/i.test(userAgent)) {
            setDevice("Tablet");
        } else {
          setDevice("Desktop");
        }
      }

      detectDeviceType();
  }, []);

  return (
    <div>
        <div style={{ color: "red", fontWeight: "bold" }}>
          Your browser is {device} <br/>
        </div>
    </div>
  );
};

export default DeviceDetector;
