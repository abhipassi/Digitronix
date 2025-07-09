import Login from './authComponents/login.jsx';
import Register from './authComponents/register.jsx';
import Home from './components/home.jsx';
import OtpModal from './authComponents/otpModal.jsx';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<OtpModal />} />
    </Routes>
    <ToastContainer position="top-right" autoClose={4000} limit={1} />
    </>

  );
}

export default App;

