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
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
