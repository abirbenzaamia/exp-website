import './App.css';
import PrivacyNotice from './components/PrivacyNotice';
import Stage1Form from './components/Stage1Form';
import StartForm from './components/StartForm';
import BrowserTypeDetector from './utils/BrowserAlert';
import DeviceDetector from './utils/DeviceAlert'
import AdBlockDetector from './utils/AdBlockAlert'
import SurveyComponent from './components/Stage1.jsx'


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home.jsx';
import Survey1 from './pages/Survey1.jsx'


import './utils/utils.js'
import { getIp } from './utils/utils.js';

// getIp()


function App() {
const urls =['https://www.lemonde.fr/', 'https://www.lachainemeteo.com/', 'https://www.shecodes.io/'] 
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="survey1" element={<Survey1 />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <div className="min-h-screen bg-gray-50 items-center justify-center p-20 text-center ">
    //   <AdBlockDetector/>
    //   <BrowserTypeDetector/>
    //   <DeviceDetector/>
    //   <PrivacyNotice/>
    //   <StartForm/>
    //   {/* < SurveyComponent urls={urls}/> */}
    //   {/* <Stage1Form/> */}
    //   </div>
    // </div>
  );
}

export default App;
