import './App.css';
import PrivacyNotice from './components/PrivacyNotice';
import StartForm from './components/StartForm';
import BrowserTypeDetector from './utils/BrowserAlert';
import DeviceDetector from './utils/DeviceAlert'
import AdBlockDetector from './utils/AdBlockAlert'

//pages 
import Home from './pages/Home.jsx';
import Survey1 from './pages/Survey1.jsx'
import Survey2 from './pages/Survey2.jsx'
import Survey3 from './pages/Survey3.jsx'

import ActivateFlagTreatment from './pages/ActivateFlagTreatment.jsx';
import ActivateFlagC1 from './pages/ActivateFlagC1.jsx';
import ActivateFlagC2 from './pages/ActivateFlagC2.jsx';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';


import './utils/utils.js'
import { getIp } from './utils/utils.js';

// getIp()


function App() {
  
  return (

    <BrowserRouter>
    <AdBlockDetector/>
      <BrowserTypeDetector/>
      <DeviceDetector/>
      <PrivacyNotice/>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="treatment" element={<ActivateFlagTreatment />} />
          <Route path="control1" element={<ActivateFlagC1 />} />
          <Route path="control2" element={<ActivateFlagC2/>} />
          <Route path="treatment/survey1" element={<Survey1/>} />
          <Route path="control1/survey1" element={<Survey1/>} />
          <Route path="control2/survey1" element={<Survey1/>} />
          <Route path="treatment/survey2" element={<Survey2/>} />
          <Route path="control1/survey2" element={<Survey2/>} />
          <Route path="control2/survey2" element={<Survey2/>} />
          <Route path="treatment/survey3" element={<Survey3/>} />
          <Route path="control1/survey3" element={<Survey3/>} />
          <Route path="control2/survey3" element={<Survey3/>} />
          
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
