import React from 'react'
import StartForm from '../components/StartForm';
import BrowserTypeDetector from '../utils/BrowserAlert';
import DeviceDetector from '../utils/DeviceAlert'
import AdBlockDetector from '../utils/AdBlockAlert'
import PrivacyNotice from '../components/PrivacyNotice';



function Home() {
  return (
    <div>
        <div className="min-h-screen bg-gray-50 items-center justify-center p-20 text-center ">
      <AdBlockDetector/>
      <BrowserTypeDetector/>
      <DeviceDetector/>
      <PrivacyNotice/>
      <StartForm/>

      </div>
    </div>
  )
}

export default Home