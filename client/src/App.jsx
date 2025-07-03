import Login from './authComponents/login.jsx';
import Register from './authComponents/register.jsx';
import Home from './components/home.jsx';
import OtpModal from './authComponents/otpModal.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<OtpModal />} />
    </Routes>
  );
}

export default App;

