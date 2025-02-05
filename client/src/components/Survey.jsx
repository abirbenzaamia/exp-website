
import React, { useState } from 'react';

const Survey = ({data}) => {
  const [adRelevance, setAdRelevance] = useState(0);
  const [visitedBefore, setVisitedBefore] = useState(false);
  const [privacyConcern, setPrivacyConcern] = useState(false);
  const [purchaseIntent, setPurchaseIntent] = useState(false);

console.log(data)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of the survey data
    console.log({
      adRelevance,
      visitedBefore,
      privacyConcern,
      purchaseIntent,
    });
    alert('Thank you for completing the survey!');
  };

  return (
    <div className="max-w-2xl m-5 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Ad Relevance Question */}
        <div className="mb-5">
          <h2 className="text-2xl font-semibold text-gray-900">Website {data.step+1}</h2>
          <p className="mt-5 text-lg text-gray-600">
           <strong>1.</strong> Please, visit this website: <a className="ext-blue-600 underline hover:text-blue-800" href={data.url} target='_blank' rel="noreferrer">{data.url} </a> <br /> <br />
           <strong>2.</strong> Copy here the link of the first ad you see as the image shows</p>
           <img src={`${process.env.PUBLIC_URL}/assets/copy-link.png`} alt="copy-link" /> <br />

          
          <div className="mt-5 max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-lg font-medium text-gray-900">
                Ad Link
              </label>
              <div className="mt-2">
                <input
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
        <div className="mb-5 ">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            I find this Ad relevant 
          </label>
          <div class="flex flex-col space-y-2 p-2 pb-20 w-full border-b border-gray-900/10">
    <input type="range" class="w-full" min="1" max="5" step="1"/>
    <ul class="flex justify-between w-full px-[20px]">
        <li class="flex text-bold justify-center relative"><span class="absolute">Strongly Disagree</span></li>
        <li class="flex justify-center relative"><span class="absolute">Agree</span></li>
        <li class="flex justify-center relative"><span class="absolute">Neither</span></li>
        <li class="flex justify-center relative"><span class="absolute">Disagree</span></li>
        <li class="flex justify-center relative"><span class="absolute">Strongly Agree</span></li>
    </ul>
</div>
        </div>



 {/* intrusiveness of the ad */}


        <div className="mb-5">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            I find this Ad intrusive
          </label>
          <div class="flex flex-col space-y-2 p-2 pb-20 w-full border-b border-gray-900/10">
    <input type="range" class="w-full" min="1" max="5" step="1"/>
    <ul class="flex justify-between w-full px-[20px]">
        <li class="flex text-bold justify-center relative"><span class="absolute">Strongly Disagree</span></li>
        <li class="flex justify-center relative"><span class="absolute">Agree</span></li>
        <li class="flex justify-center relative"><span class="absolute">Neither</span></li>
        <li class="flex justify-center relative"><span class="absolute">Disagree</span></li>
        <li class="flex justify-center relative"><span class="absolute">Strongly Agree</span></li>
    </ul>
</div>
        </div>


 {/* Purchase Intent Question */}

 <div className="mb-5">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            How willing are you to buy this pruduct or use this service from the Advertiser ?
          </label>
          <div class="flex flex-col space-y-2 p-2 pb-20 w-full border-b border-gray-900/10">
    <input type="range" class="w-full" min="1" max="5" step="1"/>
    <ul class="flex justify-between w-full px-[20px]">
        <li class="flex text-bold justify-center relative"><span class="absolute"> Not willing at all</span></li>
        <li class="flex justify-center relative"><span class="absolute">Slightly willing</span></li>
        <li class="flex justify-center relative"><span class="absolute"> Neutral</span></li>
        <li class="flex justify-center relative"><span class="absolute">Somewhat willing</span></li>
        <li class="flex justify-center relative"><span class="absolute">Very willing</span></li>
    </ul>
</div>
        </div>


        {/* Privacy Concern Question */}
        <div className="mb-6">
                  {/* Visited Before Question */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Have you visited this advertiser website before?
          </label>
          <div className="grid gap-3 grid-cols-3 mt-5">
            <div className="flex items-center gap-x-3">
                  <input
                    required
                    name="gender"
                    type="radio"
                    value="1"
                   
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="gender"
                    type="radio"
                    value="2"
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    No
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="gender"
                    type="radio"
                    value="2"
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    Don't remember
                  </label>
                </div>
           </div>
        </div>
        </div>


        {/* Submit Button */}
        {/* <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button> */}
        
    </div>
  );
};

export default Survey;