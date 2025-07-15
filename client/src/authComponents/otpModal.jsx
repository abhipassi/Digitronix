import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function OtpModal() {
  const [email,setEmail] = useState('');
  const [show,setShow] = useState(false);
  const [otp,setOtp] = useState('');

  let navigate = useNavigate()

  useEffect(() => {
    const demo = sessionStorage.getItem('email');
    if (demo) {
      setEmail(demo);
      setShow(true);
    }
  }, []);

  const handleOtpSubmit = async () => {
    console.log('Submitted OTP:', otp)
    const data = {
      email: email,
      verificationCode: otp
    }
    try {
      const response = await axios.post('http://localhost:5000/otpVerification', data, {
        withCredentials: true
      });
      // console.log(response.data);
      if (response.status === 200) {
        toast.success("OTP Verification Successful")
        return navigate('/')
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        return toast.error("Invalid or expired verification code")
      }
      else if (error.response.status === 500) {
        return toast.error("Server error during verification")
      }
      else if (error.response.status === 401) {
        return toast.error("Wrong OTP")
      }
      else {
        return toast.error("Something went wrong")
      }

    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-white w-96 rounded-2xl shadow-2xl p-6 flex flex-col items-center animate-fade-in">

        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
          onClick={() => setShow(false)}
        >
          <X size={22} />
        </button>


        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Enter the OTP
        </h2>


        {email && (
          <p className="text-sm text-gray-600 text-center mb-6">
            OTP has been sent to <span className="font-medium">{email}</span>
          </p>
        )}


        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          className="w-full text-center px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black mb-4"
        />


        <button
          onClick={handleOtpSubmit}
          className="w-full bg-blue-200 hover:bg-blue-300 focus:bg-blue-400 text-white py-2 rounded-md transition"
        >
          Submit OTP
        </button>
      </div>
    </div>
  );
}

export default OtpModal;
