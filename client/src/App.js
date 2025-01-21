import './App.css';
import PrivacyNotice from './components/PrivacyNotice';
import Stage1Form from './components/Stage1Form';
import StartForm from './components/StartForm';
import BrowserTypeDetector from './utils/BrowserAlert';
import DeviceDetector from './utils/DeviceAlert'
import AdBlockDetector from './utils/AdBlockAlert'



function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-50 items-center justify-center p-20 text-center ">
      <AdBlockDetector/>
      <BrowserTypeDetector/>
      <DeviceDetector/>

      <PrivacyNotice/>
      <StartForm/>
      <Stage1Form/>
      </div>
    </div>
  );
}

export default App;
