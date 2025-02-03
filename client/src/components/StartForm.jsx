import { useState } from "react"
import {getProlificId, getIp, detectTpc} from '../utils/utils'
import {createParticipant, createTestingGroup} from '../services/expService'
import { useNavigate } from "react-router-dom";


export default function StartForm() {
  const navigate = useNavigate();

const [profilicId, setProliciId] = useState(getProlificId);
const [ip, setIp] = useState();
const [userAgent, setUserAgent] = useState();
const [age, setAge] = useState();
const [gender, setGender] = useState();
const [education, setEducation] = useState();
const [vpn, setVpn] = useState(0);
const [tpcBlocked, setTpcBlocked] = useState();

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
          setTpcBlocked(0)
        } else {
          // The user pass 
          setTpcBlocked(1)
        } 
      }).catch(err => {
        console.log(err);
        //return false
      });
    });
  }catch (error) {
    console.error("Error:", error);
  }
};

getValue()

//assign to testing group 
const assigntestGroup = async () => {
  // Send data to the backend 
  const testing_group = await createParticipant(
    profilicId
  ).catch(console.error);

}



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
  const create_participant_response = await createParticipant(
    profilicId,
    ip,
    userAgent, 
    vpn, 
    tpcBlocked,
    age, 
    gender,
    education,
  ).catch(console.error);
  
  // Now we need to assign the user to a random testing group 
  // Send data to the backend 
  const testing_group_response = await createTestingGroup(
    profilicId
  ).catch(console.error);
  //onece the user assigned, he will be redirected to his according survey page
  localStorage.setItem("testing_group",testing_group_response.data.data.test_group);
  switch (testing_group_response.data.data.test_group) {
    case 0:
      navigate("/treatment");
      break;

    case 1:
      navigate("/control1");
      break;

    case 2:
      navigate("/control2");
      break;
    default:
      break;
  }

};



//send data to the server


  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto  w-3/4">
      
        <div className="border-b border-gray-900/10 pb-12 pt-10 text-left w-full max-w-9/10 ">
        <h2 className="text-5xl font-bold mb-4">Welcome to our user study</h2>
          
          <p className="mt-1 text-xl text-gray-600">
          This study explores how users perceive the ads they are shown while browsing the web under different privacy settings.          
          </p>

          <h2 className="text-3xl mt-5 mb-5 font-semibold text-gray-900">General information</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            
          </p>


          {/* Add a line to start general data collection  */}
          <div className="mt-5 grid gap-x-6 gap-y-8  border-t border-gray-900/10 pt-5">
        
            <div className="sm:col-span-4">
            <label htmlFor="gender" className="block text-xl font-semibold text-gray-900">
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
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    Male
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="gender"
                    type="radio"
                    value="2"
                    onChange={handleGender}
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    Female
                  </label>
                </div>
           </div>
             
          </div>



          {/* Add a line to start general data collection  */}
          <div className="sm:col-span-4">
            <label htmlFor="age" className="block text-xl font-semibold text-gray-900">
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
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    18-24
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="age"
                    type="radio"
                    value="2"
                    onChange={handleAge}
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    25-34
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="age"
                    type="radio"
                    value="3"
                    onChange={handleAge}
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    35-44
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="age"
                    type="radio"
                    value="4"
                    onChange={handleAge}
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    45-54
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="age"
                    type="radio"
                    value="5"
                    onChange={handleAge}
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                    55+
                  </label>
                </div>
           </div>
             
          </div>


 {/* Add a line to start general data collection  */}


          <div className="sm:col-span-4">
            <label htmlFor="education" className="block text-xl font-semibold text-gray-900">
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
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
                  Below Bachelor’s
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="education"
                    type="radio"
                    value="2"
                    onChange={handleEducation}
                    className="relative size-5 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  />
                  <label className="block text-lg font-medium text-gray-900">
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
          className="rounded-md text-lg bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save and Start the survey
        </button>
      </div>
    </form>
  )
}
