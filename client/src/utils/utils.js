


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



export const detectTpc = async () => {
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
      if ('3pc' in json){
        // the user should disactivate
        return false
      } else {
        // The user pass 
        return true
      } 
    }).catch(err => {
      console.log(err);
      //return false
    });
  });
}


// export const detectVpn = async (ip)=> {
//     const apiKey = 'your_api_key_here'; // Replace with your VPNAPI.io API key
//     const url = `https://vpnapi.io/api/${ip}?key=${apiKey}`;
  
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
  
//       const vpnDetect = data.security?.vpn || false;
//       const proxy = data.security?.proxy || false;
//       const tor = data.security?.tor || false;
  
//       console.log(`VPN: ${vpnDetect}, Proxy: ${proxy}, Tor: ${tor}`);
  
//       if (vpnDetect || proxy || tor) {
//         alert("VPN, Proxy, or Tor usage detected.");
//       } else {
//         alert("No VPN, Proxy, or Tor detected.");
//       }
//     } catch (error) {
//       console.error("Error detecting VPN:", error);
//     }
//   }
  








// Get Prolific IDby name

export const setTestingGroup = (prolific_id, nb_participants) => {
  

}

