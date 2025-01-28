import { useState } from "react"
import {getProlificId, getIp} from '../utils/utils'
import {createParticipant} from '../services/expService'


export default function StartForm() {

const [profilicId, setProliciId] = useState(getProlificId);
const [ip, setIp] = useState();
const [userAgent, setUserAgent] = useState();
const [age, setAge] = useState();
const [gender, setGender] = useState();
const [education, setEducation] = useState();


// const handleSubmit= (e) => {
//   e.preventDefault()
//   console.log(ip)
//   console.log('your user agent is', navigator.userAgent)
// }
const getValue = async () => {
  try {
    const ip_val = await getIp(); 
    setIp(ip_val.ip);
    const prolific_id_val = await getProlificId(); 
    setProliciId(prolific_id_val);
    setUserAgent(navigator.userAgent)
    // Wait for the promise to resolve
  } catch (error) {
    console.error("Error:", error);
  }
};

getValue()


const handleGender = (event) => {
  setGender(event.target.value); // Update state when a radio is selected
};
const handleAge = (event) => {
  setAge(event.target.value); // Update state when a radio is selected
};
const handleEducation = (event) => {
  setEducation(event.target.value); // Update state when a radio is selected
};

const handleSubmit = async e => {
  e.preventDefault(); // Prevent page reload
  localStorage.setItem("prolific_id", profilicId);
  // Send data to the backend 
  const response = await createParticipant(
    profilicId,
    ip,
    userAgent, 
    age, 
    gender,
    education,
  ).catch(console.error);
window.location.href = "/survey1"
};


//send data to the server


  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto  w-1/2">
        <div className="border-b border-gray-900/10 pb-12 pt-20 text-left max-w-4xl ">
        <h2 className="text-xl font-bold mb-4">User study about user perception of Ads in different privacy options.</h2>
          
          <p className="mt-1 text-sm/6 text-gray-600">
            This study aims to evalute how users perceive the ads they receive when browsing the web in different privacy option.
          </p>

          <h2 className="text-base/7 mt-5 font-semibold text-gray-900">General information</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            In this part, you will first share with us general information about you. The we will ask you to activate a chrome flag for each of the privacy option.
            Then, we will ask you to visit 3 publisher websites (websites that show Ads). For each of the visited website you will share with us the link of the <strong>First Ad</strong> you see in the website. 
          </p>


          {/* Add a line to start general data collection  */}
          <div className="mt-5 grid gap-x-6 gap-y-8  border-t border-gray-900/10 pt-5">
        
            <div className="sm:col-span-4">
            <label htmlFor="gender" className="block text-sm/6 font-medium text-gray-900">
                Your gender
              </label>
            <div className="grid gap-4 grid-cols-2 mt-5">
            <div className="flex items-center gap-x-3">
                  <input
                    required
                    name="gender"
                    type="radio"
                    value="1"
                    onChange={handleGender}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-sm/6 font-medium text-gray-900">
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="gender"
                    type="radio"
                    value="2"
                    onChange={handleGender}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-sm/6 font-medium text-gray-900">
                    Female
                  </label>
                </div>
           </div>
             
          </div>



          {/* Add a line to start general data collection  */}
          <div className="sm:col-span-4">
            <label htmlFor="age" className="block text-sm/6 font-medium text-gray-900">
                Your Age
              </label>
            <div className="grid gap-4 grid-cols-6 mt-5">
            <div className="flex items-center gap-x-3">
                  <input
                    required
                    name="age"
                    type="radio"
                    value="1"
                    onChange={handleAge}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-sm/6 font-medium text-gray-900">
                    18-24
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="age"
                    type="radio"
                    value="2"
                    onChange={handleAge}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-sm/6 font-medium text-gray-900">
                    25-34
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="age"
                    type="radio"
                    value="3"
                    onChange={handleAge}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-sm/6 font-medium text-gray-900">
                    35-44
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="age"
                    type="radio"
                    value="4"
                    onChange={handleAge}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-sm/6 font-medium text-gray-900">
                    45-54
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="age"
                    type="radio"
                    value="5"
                    onChange={handleAge}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-sm/6 font-medium text-gray-900">
                    55+
                  </label>
                </div>
           </div>
             
          </div>


 {/* Add a line to start general data collection  */}


          <div className="sm:col-span-4">
            <label htmlFor="education" className="block text-sm/6 font-medium text-gray-900">
                Your Education level
              </label>
            <div className="grid gap-4 grid-cols-2 mt-5">
            <div className="flex items-center gap-x-3">
                  <input
                    required
                    name="education"
                    type="radio"
                    value="1"
                    onChange={handleEducation}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-sm/6 font-medium text-gray-900">
                  Below Bachelor’s
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="education"
                    type="radio"
                    value="2"
                    onChange={handleEducation}
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-sm/6 font-medium text-gray-900">
                  Bachelor’s or above
                  </label>
                </div>
           </div>
             
          </div>




          </div>
        </div>

      </div>

      <div className="mt-6  text-center">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save and Start the survey
        </button>
      </div>
    </form>
  )
}
