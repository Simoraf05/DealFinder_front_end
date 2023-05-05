import { ToastContainer } from 'react-toastify';
import './App.css';
import Layouts from './components/Layouts';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Layouts/>
      <ToastContainer/>
    </div>
  );
}

export default App;
