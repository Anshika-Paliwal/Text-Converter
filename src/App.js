import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
  <>
  <Navbar title="TextConverter" aboutText="AboutTextConverter"/> {/* Component 1*/}
  <div className="container my-3">
  <TextForm heading="Enter the text to analyse: "/> {/*Component 2*/}
  </div>
  </>
  );
}

export default App;
