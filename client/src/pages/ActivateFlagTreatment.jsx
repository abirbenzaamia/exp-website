
import { useEffect } from "react";



//import test-enabled from '../../public/assets/test-enbaled-flag.png'


export default function ActivateFlagTreatment() {


// The stage one is dedicated for surevey repsonse for the Treatment group : Privacy Sandbox
 const handleSubmit = async e => {
  // const cookieString = document.cookie;
  //   const cookies = cookieString.split("; ");
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
        alert('You did not block third-party cookies. Please re-do the steps.')
      } else {
        // The user pass 
        alert('cookies blocked')
      } 
    }).catch(err => {
      console.log(err);
      //return false
    });
  });
  };

return (
    // <form onSubmit={handleSubmit} >
      <div className="p-6 bg-white rounded-lg shadow-sm h-screen grid place-items-center">
        <div className="flex justify-center items-center p-4">
      <iframe
        src="https://x-3pc.onrender.com/set-3pc.html"
        title="Hidden Iframe"
      width="0"
      height="0"
      style={{ display: "none" }}
      />
    </div>
        <div className=" pb-12 text-left max-w-4xl p-8 bg-white rounded shadow-lg ">
          <h1 className="text-2xl mt-5 font-bold text-gray-900">Follow these 3 steps</h1>
          <p className="mt-3 text-lg text-gray-600">

            In this section you will be required to activate The <a href="https://privacysandbox.com/intl/en_us/" className="text-blue-600/100">  Google Privacy Sanbdbox</a> as the pictures show<br /> <br />

            <strong>1. </strong>Please go to: <strong> chrome://flags/#test-third-party-cookie-phaseout</strong> to desactivate it and choose <strong>Enabled.</strong> <br /> 
            <img src={`${process.env.PUBLIC_URL}/assets/test-enbaled-flag.png`} alt="test-enabled-flag" /> <br />
            <strong>2. </strong>Please go to: <strong> chrome://flags/#tpc-phase-out-facilitated-testing </strong> to activate it and choose <strong>Enabled Force Treatment.</strong> <br />
            <img src={`${process.env.PUBLIC_URL}/assets/treatment-flag.png`} alt="test-enabled-flag" /> <br />
            <strong>3.</strong> Finally relaunch Chrome as follow: <br />
            <img src={`${process.env.PUBLIC_URL}/assets/relaunch.png`} alt="test-enabled-flag" /> <br />
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