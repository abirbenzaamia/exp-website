
import {setCookie, getCookie} from '../utils/utils'


export default function ActivateFlagTreatment() {

// The stage one is dedicated for surevey repsonse for the Treatment group : Privacy Sandbox
 const handleSubmit = async e => {
  const cookieString = document.cookie;
    const cookies = cookieString.split("; ");
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === '_fbp') {
        console.log('cookie _fbp found')
      }else{
        console.log('cookie _fbp not found')
      }
    }
//       try{
//         setCookie("OPT_OUT", 1, 7)
//       }
//       catch{
//         alert('You did not activate the flag as mentioned')
//       }

//       // Example usage
// const userSession = getCookie('OPT_OUT');
// if (userSession) {
//   console.log(`Session ID: ${userSession}`);
// } else {
//   console.log('Session cookie not found');
// }


// fetch("https://connect.facebook.net/en_US/fbevents.js", {
//   method: "GET",
//   mode: "no-cors", // Ensure cookies are sent and accessible
// })
//   .then((response) => {
//     console.log("Resource loaded successfully.");
//     checkCookies();
//   })
//   .catch(() => {
//     console.log("Failed to load the resource.");
//   });

// function checkCookies() {
//   const fbCookie = getCookie("_fbp"); // Example Facebook cookie name
//   if (fbCookie) {
//     console.log("Facebook cookie detected:", fbCookie);
//   } else {
//     console.log("Facebook cookie not found.");
//   }
// }

// function getCookie(name) {
//   const cookieString = document.cookie;
//   const cookies = cookieString.split("; ");
//   for (const cookie of cookies) {
//     const [key, value] = cookie.split("=");
//     if (key === name) {
//       return decodeURIComponent(value);
//     }
//   }
//   return null;
// }



      };

return (
    // <form onSubmit={handleSubmit} >
      <div className="p-6 bg-white rounded-lg shadow-sm h-screen grid place-items-center">
        <div className=" pb-12 text-left max-w-4xl p-8 bg-white rounded shadow-lg ">

          <h1 className="text-2xl mt-5 font-bold text-gray-900">Follow these 2 steps</h1>
          <p className="mt-3 text-lg text-gray-600">
            In this section you will be required to activate The <a href="https://privacysandbox.com/intl/en_us/" className="text-blue-600/100">  Google Privacy Sanbdbox</a> as the pictures show<br /> <br />
            <strong>1. </strong>Please go to: <strong> chrome://flags/#test-third-party-cookie-phaseout</strong> to desactivate it and choose <strong>Disabled.</strong> <br /> <br />
            <strong>2. </strong>Please go to: <strong> chrome://flags/#tpc-phase-out-facilitated-testing </strong> to activate it and choose <strong>Enabled Force Treatment.</strong>
          </p>

          <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          // type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save and continue
        </button>
      </div>
        </div>

      </div>

    // </form>
  )



}