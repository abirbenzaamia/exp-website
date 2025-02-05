import './App.css';
import PrivacyNotice from './components/PrivacyNotice';
import StartForm from './components/StartForm';
import BrowserTypeDetector from './utils/BrowserAlert';
import DeviceDetector from './utils/DeviceAlert'
import AdBlockDetector from './utils/AdBlockAlert'
import SurveyComponent from './components/Stage1.jsx'


//pages 
import Home from './pages/Home.jsx';
import Survey from './pages/Survey.jsx'
import ActivateFlagTreatment from './pages/ActivateFlagTreatment.jsx';
import ActivateFlagC1 from './pages/ActivateFlagC1.jsx';
import ActivateFlagC2 from './pages/ActivateFlagC2.jsx';


import { BrowserRouter, Routes, Route } from "react-router-dom";



import './utils/utils.js'
import { getIp } from './utils/utils.js';

// getIp()


function App() {
const urls =['https://www.lemonde.fr/', 'https://www.lachainemeteo.com/', 'https://www.shecodes.io/'] 
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
          <Route path="treatment/survey" element={<Survey />} />
          <Route path="control1/survey" element={<Survey />} />
          <Route path="control2/survey" element={<Survey />} />
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
