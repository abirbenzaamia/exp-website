
import { useEffect } from "react";


import {setCookie, getCookie} from '../utils/utils'

import GoogleTPC from "../components/GoogleTPC";
export default function ActivateFlagTreatment() {
  const GA_TRACKING_ID = "G-BW73V2KYB5";

  
  // useEffect(() => {
  //   // Load the gtag script
  //   const CookieDetect = async () => {
  //     // Detect ad blocker using a bait URL
  //  fetch("https://region1.google-analytics.com/g/collect?v=2&tid=G-BW73V2KYB5&gtm=45je51r0v9204960543za200&_p=1738148197257&gcd=13l3l3l2l1l1&npa=1&dma_cps=syphamo&dma=1&tag_exp=102067808~102081485~102123608~102418426~102539968&cid=1133507061.1738083378&ul=en-us&sr=1536x960&uaa=x86&uab=64&uafvl=Not%2520A(Brand%3B8.0.0.0%7CChromium%3B132.0.6834.159%7CGoogle%2520Chrome%3B132.0.6834.159&uamb=0&uam=&uap=macOS&uapv=14.6.1&uaw=0&are=1&frm=0&pscdl=&_s=1&sid=1738147730&sct=2&seg=1&dl=http%3A%2F%2Flocalhost%2Ftreatment&dt=User%20Study&en=page_view&_ee=1&tfd=5177", {
  //    method: "POST",
  //    mode: "no-cors",
  //  })
  //    .then(() => {
  //      console.log("No 3PCs");
     
  //    })
  //    .catch(() => {
  //      console.log("3PCS");
  //    // Disable all input fields
    
  //    });
  //  };

  //  CookieDetect();
  // }, []);

// The stage one is dedicated for surevey repsonse for the Treatment group : Privacy Sandbox
 const handleSubmit = async e => {
  // const cookieString = document.cookie;
  //   const cookies = cookieString.split("; ");

  

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