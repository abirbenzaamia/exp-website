
const publishers = [
  "https://apnews.com/",
  "https://asuracomic.net/",
  "https://blackfriday.com/",
  "https://edition.cnn.com/",
  "https://letterboxd.com/",
  "https://m.cricbuzz.com/",
  "https://m.forebet.com/",
  "https://manhwaclan.com/",
  "https://timesofindia.indiatimes.com/",
  "https://weather.com/",
  "https://www.lemonde.fr/",
  "https://www.biblegateway.com/",
  "https://www.businessinsider.com/",
  "https://www.cnn.com/",
  "https://www.coolmathgames.com/",
  "https://www.cricbuzz.com/",
  "https://www.espncricinfo.com/",
  "https://www.forbes.com/",
  "https://www.foxnews.com/",
  "https://www.furaffinity.net/",
  "https://20.mark.qureka.com/",
  "https://a01.besttoolsforai.com/",
  "https://a05.4kzgame.com/",
  "https://animekhor.org/",
  "https://audioalter.com/",
  "https://best-hashtags.com/",
  "https://bleacherreport.com/",
  "https://dinorunner.com/",
  "https://drama.fandom.com/",
  "https://free.apkfunny.com/",
  "https://l1dbi1.lakakids.com/",
  "https://m.economictimes.com/",
  "https://m.filmaffinity.com/",
  "https://www.allofapps.com/",
  "https://www.clickthecity.com/",
  "https://www.filmaffinity.com/",
  "https://www.food.com/",
  "https://www.gmanetwork.com/",
  "https://www.gpfans.com/",
  "https://www.harpersbazaar.com/",
  "https://www.livemint.com/",
  "https://www.lottopcso.com/",
  "https://www.ndtv.com/",
  "https://www.nlcbplaywhelotto.com/",
  "https://www.pakwheels.com/",
  "https://www.quizfoto.com/",
  "https://www.royalroad.com/",
  "https://www.skylinewebcams.com/",
  "https://www.sveedy.com/",
  "https://www.thesaurus.com/",
  "https://www.tigerdroppings.com/",
  "https://www.timesbull.com/",
  "https://www.xe.com/",
  "https://www.xscores.com/",
  "https://audacity.wonderhowto.com/",
  "https://northvilleathletics.org/",
  "https://www.merriam-webster.com/",
  "https://www.nbcnews.com/",
  "https://www.nexusmods.com/",
  "https://an1.com/",
  "https://byjus.com/",
  "https://coinmarketcap.com",
  "https://fdown.net/",
  "https://satta-king-fast.com/",
  "https://apkpure.net/",
  "https://fastvideosave.net/",
  "https://fdownloader.net/",
  "https://insta-stories-viewer.com/",
  "https://www.croxyproxy.com/"
]

// Detect device type 

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

// export const setTestingGroup = (prolific_id, nb_participants) => {
  

// }




// const fs = require('fs');


// import fs from "fs";


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
    //console.log(data)
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

// Function to get random entries from an array
function getRandomEntries(array, count) {
  const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle the array
  return shuffled.slice(0, count); // Select the first 'count' entries
}
// Function to read a JSON file and select 3 random entries
export const  setPublisherWebsites = () => {
    // Read the JSON file
 

        // Select 3 random entries
        const randomEntries = getRandomEntries(publishers, 1);

        // Display the selected entries
        console.log("Randomly selected entries:");
        console.log(randomEntries);
        return randomEntries;
    };


