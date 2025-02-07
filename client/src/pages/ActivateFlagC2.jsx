
import { useState } from "react";
import { useNavigate } from "react-router-dom";


import AlertMessage from "../components/AlertMessage";


//import test-enabled from '../../public/assets/test-enbaled-flag.png'


export default function ActivateFlagC2() {


  const [alertShow, SetAlertShow] = useState()
  const navigate = useNavigate();

// The stage one is dedicated for surevey repsonse for the Treatment group : Privacy Sandbox
 const handleSubmit = async e => {
  // const cookieString = document.cookie;
  //   const cookies = cookieString.split("; ");
  SetAlertShow(false)
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
        // the user pass
        //alert('error');
        console.log('passed, cookie not blocked');
        SetAlertShow(true)
      } else {
        console.log('cookies blocked')
        navigate("./survey1");
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
        {
          alertShow && <AlertMessage msg={"It looks like some required steps were missed. Please ensure that you follow all instructions carefully and try again."}/>
        }
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
          <h1 className="text-2xl mt-5 font-bold text-gray-900">Please, do the following 3 steps</h1>
          <p className="mt-3 text-lg text-gray-600">

            In this section you will be required to disable third-party cookies. To do so, do the following:<br /> <br />

            <strong>1. </strong>Please copy and paste this link in the search bar: <br /><strong> chrome://flags/#test-third-party-cookie-phaseout</strong> <br /> and choose <strong>Enabled</strong> as the image shows.<br /> 
            <img src={`${process.env.PUBLIC_URL}/assets/test-enbaled-flag.png`} alt="test-disabled-flag" /> <br />
            <strong>2. </strong> Please copy and paste this link in the search bar <br /> <strong> chrome://flags/#tpc-phase-out-facilitated-testing </strong> <br /> and choose <strong>Enabled Force Control2</strong> as the image shows. <br />
            <img src={`${process.env.PUBLIC_URL}/assets/control-flag.png`} alt="test-enabled-flag" /> <br />
            <strong>3.</strong> Finally click on <strong>Relaunch</strong> that appears in the bottom as follow: <br />
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