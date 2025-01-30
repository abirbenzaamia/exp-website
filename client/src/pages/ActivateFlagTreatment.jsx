
import { useEffect } from "react";


import {get3pc, set3pc} from '../utils/utils'

export default function ActivateFlagTreatment() {

  useEffect(() => {
    // Load the gtag script
  const setCookie = set3pc()
  console.log(setCookie)


  }, []);

// The stage one is dedicated for surevey repsonse for the Treatment group : Privacy Sandbox
 const handleSubmit = async e => {
  // const cookieString = document.cookie;
  //   const cookies = cookieString.split("; ");
  const Cookie = get3pc();
  console.log(Cookie)
  if (Cookie){
    //alert("cookies are still enabled, they should be blocked")
  }else{
    //alert("cookies are blocked")
  }
  };

return (
    // <form onSubmit={handleSubmit} >
      <div className="p-6 bg-white rounded-lg shadow-sm h-screen grid place-items-center">
        <div className=" pb-12 text-left max-w-4xl p-8 bg-white rounded shadow-lg ">
        <p>Third-party cookies look like they are: <em className="set-3pc status">[TESTING…]</em></p>
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