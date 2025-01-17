import './App.css';
import PrivacyNotice from './components/PrivacyNotice';
import StartForm from './components/StartForm';
import AdBlockDetector from './utils/adBlockAlert';
import BrowserTypeDetector from './utils/BrowserAlert';
import DeviceDetector from './utils/DeviceAlert'


function App() {
  return (
    <div className="App">
      <AdBlockDetector/>
      <BrowserTypeDetector/>
      <DeviceDetector/>
      
      <div className="min-h-screen bg-gray-50 flex items-center justify-center ">
      <PrivacyNotice/>
      <StartForm/>

      </div>
    </div>
  );
}

export default App;
