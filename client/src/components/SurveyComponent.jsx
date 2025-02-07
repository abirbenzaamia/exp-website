import React, { useState, useEffect } from "react";
import { setPublisherWebsites } from "../utils/utils";
import { useNavigate, useLocation } from "react-router-dom";
import {createResponse} from '../services/expService'



const SurveyComponent = (step) => {
  const navigate = useNavigate();
  const location = useLocation();



  const [complete, setComplete] = useState(false);

    const [url, setUrl] = useState(setPublisherWebsites);
    const prolific_id = localStorage.getItem("prolific_id");
    const [adUrl, setAdUrl] = useState();
    const [adRelevance, setAdRelevance] = useState(0);
    const [privacy, setPrivacy] = useState(0);
    const [purchaseIntent, setPurchaseIntent] = useState(0);
    const [visited, setVisited] = useState();
   
    const testing_group = parseInt(localStorage.getItem("testing_group"))
    let completion_code = ""
    

   console.log(testing_group)
   switch (testing_group) {
    case 0:
      completion_code = "C1IG27I1";
      break;

    case 1:
      completion_code = "CP6HTPLV" ;
      break;
    
    case 2:
      completion_code = "C1KZRH9U";
      break;

    default:
      break;
   }
  

   console.log(completion_code)
    const handleAdRelevance = (event) => {
      setAdRelevance(event.target.value);
    };
  
    const handlePrivacy = (event) => {
      setPrivacy(event.target.value);
    };
  
    const handleVisited = (event) => {
      setVisited(event.target.value);
    };
  
    const handlePurchase = (event) => {
      setPurchaseIntent(event.target.value);
    };
    const handleAdUrl = (event) => {
      setAdUrl(event.target.value);
    };
  
  
    const handleSubmit = async (e) => {
      // Handle the submission of the survey data
      e.preventDefault();

      // Send anyway to the backend
      // prolific_id, test_group, publisher, ad_url, r1, r2, r3, r4
      console.log(
        prolific_id,
        testing_group,
        url[0],
        adUrl,
        adRelevance,
        privacy,
        purchaseIntent,
        visited
      );

      const create_participant_response = await createResponse(
        prolific_id,
        testing_group,
        url[0],
        adUrl,
        adRelevance,
        privacy,
        purchaseIntent,
        visited
      ).catch(console.error);



      const basePath = location.pathname.split('/').slice(0, -1).join('/');
      switch (step.step ) {
        case 1:
          navigate(`${basePath}/survey2`);
          break;

        case 2:
          navigate(`${basePath}/survey3`);
          break;
        
        case 3:
        // Show the completion code 
          setComplete(true);
          break;
      
        default:
          break;
      }
     


      };
  // Survey data (questions for each step)


  // // Handler for the Submit button
  // const handleNext = () => {
  //   if (step < 2){
  //     handleNext()
  //   }else{
  //     handleSubmit()
  //   }
  // };

  return (
    <div className="text-center">
        <div className="container mx-auto w-1/2 text-left">

      <form onSubmit={handleSubmit}>
        {/* Survey page  */}


        <div className="max-w-3xl m-5 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Ad Relevance Question */}
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-gray-900">Website {step.step}</h2>
          <p className="mt-5 text-lg text-gray-600">
           <strong>1.</strong> Go to <a className="ext-blue-600 underline hover:text-blue-800" href={url[0]} target='_blank' rel="noreferrer">{url[0]} </a> <br /> <br />
           <strong>2.</strong> If you don't see an Advertisement make sure you deactivate Ad blockers. <br /><br />
           <strong>3.</strong> Copy here the link of the first Ad you see (right-click on the ad and select <strong>copy link</strong> ) </p><br />
           <img src={`${process.env.PUBLIC_URL}/assets/copy-link.png`} alt="copy-link" /> <br />

          
          <div className="mt-5 max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-900">
                Ad Link
              </label>
              <div className="mt-2">
                <input
                  value={adUrl}
                  onChange={handleAdUrl}
                  id="ad1"
                  name="ad2"
                  type="url"
                  autoComplete="url"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          </div>
          
          <h3 className="font-bold text-xl mb-6 text-left">Please answer the following questions </h3>
  

       {/* Add slider  */}

       {/* Ad relevancy slider */}

        <div className="mb-5 mt-5">
          <label className="block text-lg font-medium text-gray-700 mb-2">
          I find this Ad relevant
          </label>
          <div className="flex flex-col space-y-2 p-2 pb-20 w-full border-gray-900/10">
    <input
     type="range" 
     min="1"
     max="5" 
     step="1"
     value={adRelevance}
     onChange={handleAdRelevance}
     className='w-full h-1 bg-gray-300 rounded-xl appearance-none cursor-pointer focus:outline-none'/>

    <ul className="flex justify-between w-full px-[20px]">
        <li className="flex text-bold justify-center relative"><span className="absolute">Strongly Disagree</span></li>
        <li className="flex justify-center relative"><span className="absolute">Disagree</span></li>
        <li className="flex justify-center relative"><span className="absolute">Neither</span></li>
        <li className="flex justify-center relative"><span className="absolute">Agree</span></li>
        <li className="flex justify-center relative"><span className="absolute">Strongly Agree</span></li>
    </ul>
</div>
        </div>


        <div className='border-t pb-5 border-gray-300'>

</div>


 {/* intrusiveness of the ad */}


 <div className="mb-5 mt-5">
          <label className="block text-lg font-medium text-gray-700 mb-2">
          I find this Ad intrusive

          </label>
          <div className="flex flex-col space-y-2 p-2 pb-20 w-full border-gray-900/10">
    <input
     type="range" 
     min="1"
     max="5" 
     step="1"
     value={privacy}
     onChange={handlePrivacy}
     className='w-full h-1 bg-gray-300 rounded-xl appearance-none cursor-pointer focus:outline-none'/>

    <ul className="flex justify-between w-full px-[20px]">
        <li className="flex text-bold justify-center relative"><span className="absolute">Strongly Disagree</span></li>
        <li className="flex justify-center relative"><span className="absolute">Disagree</span></li>
        <li className="flex justify-center relative"><span className="absolute">Neither</span></li>
        <li className="flex justify-center relative"><span className="absolute">Agree</span></li>
        <li className="flex justify-center relative"><span className="absolute">Strongly Agree</span></li>
    </ul>
</div>
        </div>


        <div className='border-t pb-5 border-gray-300'>

</div>


 {/* Purchase Intent Question */}

 <div className="mb-5 mt-5">
          <label className="block text-lg font-medium text-gray-700 mb-2">
          How willing are you to buy this pruduct or use this service from this Advertiser ?

          </label>
          <div className="flex flex-col space-y-2 p-2 pb-20 w-full border-gray-900/10">
    <input
     type="range" 
     min="1"
     max="5" 
     step="1"
     value={purchaseIntent}
     onChange={handlePurchase}
     className='w-full h-1 bg-gray-300 rounded-xl appearance-none cursor-pointer focus:outline-none'/>

    <ul className="flex justify-between w-full px-[20px]">
        <li className="flex text-bold justify-center relative"><span className="absolute">Strongly Disagree</span></li>
        <li className="flex justify-center relative"><span className="absolute">Disagree</span></li>
        <li className="flex justify-center relative"><span className="absolute">Neither</span></li>
        <li className="flex justify-center relative"><span className="absolute">Agree</span></li>
        <li className="flex justify-center relative"><span className="absolute">Strongly Agree</span></li>
    </ul>
</div>
        </div>


        <div className='border-t pb-5 border-gray-300'>

</div>



{/* Visited before  */}

<div className="sm:col-span-4">
            <label htmlFor="visited" className="block text-lg font-medium text-gray-700 mb-2">
                Did you visited this website before ?
              </label>
            <div className="grid gap-4 grid-cols-3 mt-5">
            <div className="flex items-center gap-x-3">
                  <input
                    required
                    name="visited"
                    type="radio"
                    value="1"
                    onChange={handleVisited}
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="visited"
                    type="radio"
                    value="2"
                    onChange={handleVisited}
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    No
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    required
                    name="visited"
                    type="radio"
                    value="2"
                    onChange={handleVisited}
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    Don't remember
                  </label>
                </div>
           </div>
             
          </div>
 


{/* Submit Button */}
{/* <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Next
        </button> */}
        
    </div>

        <div className="max-w-3xl m-5 p-6 pt-0 items-center justify-center ">


        {complete && (
        <p className="text-lg text-gray-700">
          You complete code is <strong> {completion_code} </strong>
        </p>
      )}


        <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        type="submit"
        //onClick={handleSubmit}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {step.step <  3 ? "Next" : "Submit"}
      </button>
      </div>
      </form>

      </div>
      
    </div>
  );
};

export default SurveyComponent;
