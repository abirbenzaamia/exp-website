import { useEffect } from "react";

const GoogleTPC = () => {
  const GOOGLE_ANALYTICS_ID = "G-BW73V2KYB5"; // Replace with your Google Analytics ID

  useEffect(() => {

  
  // Try setting a cross-site cookie
  fetch('https://x-origin-src.glitch.me/set-3pc.json', {
    method: 'GET',
    credentials: 'include'
  })
  .then(response => {
    fetch('https://x-origin-src.glitch.me/get-3pc.json', {
      method: 'GET',
      credentials: 'include'
    })
    .then(response => response.json())
    .then(json => {
     console.log(json)
    }).catch(err => {
      console.log(err);

    });
  });

  }, []);

  return (
    <div className="p-4">
      <h1>Third-Party Cookie Installation Example</h1>
      <p>Check your browser's cookie storage for Google Analytics cookies.</p>
    </div>
  );
};

export default GoogleTPC;
