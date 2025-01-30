


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


// Set Cookie 

export const set3pc = () => {
    // Detect ad blocker using a bait URL
    fetch("https://x-3pc.onrender.com/set-3pc.html", {
      method: "GET",
    })
      .then(res => {
        console.log(res);
        return true;
      })
      .catch(err => {
        console.log(err);
      return false;
      });
}

export const get3pc = () =>  {
 // Try setting a cross-site cookie
 fetch('https://x-3pc.onrender.com/get-3pc.json', {
  method: 'GET',
  credentials: 'include'
})
.then(response => {
  fetch('https://x-3pc.onrender.com/get-3pc.json', {
    method: 'GET',
    credentials: 'include'
  })
  .then(response => response.json())
  .then(json => {
    console.log('3PCs are enabled')
    return true
  }).catch(err => {
    console.log('3PCs are blocked');
    return false
  });
});
}


//const ipinfo = require("ipinfo");

// const getDetails = async (ip = null) => {
//   const token = "your_access_token"; // Replace with your IPinfo access token
//   try {
//     const details = await new Promise((resolve, reject) => {
//       ipinfo(ip, token, (err, cDetails) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(cDetails);
//         }
//       });
//     });

//     console.log("IP Details:", details);
//     return details;
//   } catch (error) {
//     console.error("Error fetching IP details:", error);
//   }
// };

// // Fetch details for the current user's IP
// getDetails();

// Optionally, fetch details for a specific IP address
// getDetails("8.8.8.8");


// Get ip adress 

export const getIp = async () => {

try {
  // Use a public IP lookup API
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();
  console.log(data)
  return data;

} catch (err) {
  console.error(err);
  return 0;
}

}



// Get Prolific IDby name

export const getProlificId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const prolificID = urlParams.get("PROLIFIC_PID");
  if (prolificID){
    console.log("Prolific ID:", prolificID);
    return prolificID;
  }else{
    console.log("No Prolific ID found in the URL.");
    return false;
  }

}



// Get Prolific IDby name

export const setTestingGroup = (prolific_id, nb_participants) => {
  

}

