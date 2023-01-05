import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './pages/Router/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Particle from './pages/Home/Slider/Particle/Particle.jsx';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
      <Particle></Particle>
    </div>
  );
}

export default App;
