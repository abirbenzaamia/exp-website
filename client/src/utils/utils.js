


// Detect device type 

export const detectDevice = () => {
  const userAgent = navigator.userAgent;

  if (/Mobi|Android/i.test(userAgent)) {
    return false;
  } else if (/iPad|Tablet/i.test(userAgent)) {
    return false;
  } else {
    return true;
  }

  }


// Detect browser 

export const detectBrowser= () =>{

    const userAgent = navigator.userAgent;

    if (/chrome|chromium|crios/i.test(userAgent) && !/edge|edg/i.test(userAgent)) {
      return true;
    } else if (/safari/i.test(userAgent) && !/chrome|chromium|crios/i.test(userAgent)) {
        return false;
    } else if (/firefox|fxios/i.test(userAgent)) {
        return false;
    } else if (/edge|edg/i.test(userAgent)) {
        return false;
    } else if (/opera|opr/i.test(userAgent)) {
        return false;
    } else {
        return false;
    }

}


// Detect AdBlock 

export const detectAdBlock = async () => {


       // Detect ad blocker using a bait URL
    fetch("https://connect.facebook.net/en_US/fbevents.js", {
      method: "GET",
      mode: "no-cors",
    })
      .then(() => {
        console.log("Resource loaded successfully. No ad blocker detected.");
        return false;
      })
      .catch(() => {
        console.log("Ad blocker detected.");
      // Disable all input fields
      const inputs = document.querySelectorAll("input");
      inputs.forEach((input) => {
          input.setAttribute("disabled", "");
      });
      return true;
      });

}

// Collect IP Adress 


