import './App.css';
import PrivacyNotice from './components/PrivacyNotice';
import StartForm from './components/StartForm';


function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-50 flex items-center justify-center ">
      <PrivacyNotice/>
      <StartForm/>

      </div>
    </div>
  );
}

export default App;
