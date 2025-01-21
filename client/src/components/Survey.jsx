
import React, { useState } from 'react';

const Survey = () => {
  const [adRelevance, setAdRelevance] = useState(0);
  const [visitedBefore, setVisitedBefore] = useState(false);
  const [privacyConcern, setPrivacyConcern] = useState(false);
  const [purchaseIntent, setPurchaseIntent] = useState(false);

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
      <form onSubmit={handleSubmit}>
        {/* Ad Relevance Question */}
        <div className="mb-5">
          <h2 className="text-base/7 font-semibold text-gray-900">Website 1</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
           <strong>1.</strong> Vistite this website: <a className="ext-blue-600 underline hover:text-blue-800" href="chrome://flags/#tpc-phase-out-facilitated-testing">Le monde</a> <br /> 
           <strong>2.</strong> Copy here the link of the first ad you see by right click then copy link adress</p>
          
          <div className="mt-5 max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Ad Link
              </label>
              <div className="mt-2">
                <input
                  id="ad1"
                  name="ad2"
                  type="url"
                  autoComplete="url"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          </div>
          <h3 className="font-bold mb-6 text-left">What do you think ?</h3>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How relevant is the ad you just saw? (1 = Not Relevant, 5= Neutral, 10 = Very Relevant)
          </label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
              <button
                key={rating}
                type="button"
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                  adRelevance === rating
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setAdRelevance(rating)}
              >
                {rating}
              </button>
            ))}
          </div>
        </div>

        {/* Visited Before Question */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Have you visited this website before?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="visitedBefore"
                checked={visitedBefore}
                onChange={() => setVisitedBefore(true)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="visitedBefore"
                checked={!visitedBefore}
                onChange={() => setVisitedBefore(false)}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

 {/* Purchase Intent Question */}
 <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you think you will buy this product?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="purchaseIntent"
                checked={purchaseIntent}
                onChange={() => setPurchaseIntent(true)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="purchaseIntent"
                checked={!purchaseIntent}
                onChange={() => setPurchaseIntent(false)}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Privacy Concern Question */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Do you feel this ad is coming at the expense of your privacy?
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="privacyConcern"
                checked={privacyConcern}
                onChange={() => setPrivacyConcern(true)}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="privacyConcern"
                checked={!privacyConcern}
                onChange={() => setPrivacyConcern(false)}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>


        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Survey;