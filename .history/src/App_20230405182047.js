import './App.css';
import Layouts from './components/Layouts';

function App() {
  return (
    <div className="App">
      <Layouts/>
      <Toas
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
