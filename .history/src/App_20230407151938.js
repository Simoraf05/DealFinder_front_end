import { ToastContainer } from 'react-toastify';
import './App.css';
import Layouts from './components/Layouts';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Layouts/>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
        />    
    </div>
  );
}

export default App;
