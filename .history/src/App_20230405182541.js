import { ToastContainer } from 'react-toastify';
import './App.css';
import Layouts from './components/Layouts';

function App() {
  return (
    <div className="App">
      <Layouts/>
      <ToastContainer
position="top-center"
autoClose={5000}
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
