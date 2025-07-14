import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

function OtpModal() {
  const [email, setEmail] = useState('');
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState('');

  useEffect(() => {
    const demo = sessionStorage.getItem('email');
    if (demo) {
      setEmail(demo);
      setShow(true);
    }
  }, []);

  const handleOtpSubmit = () => {
    console.log('Submitted OTP:', otp);
    // Add OTP validation logic here

  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-white w-96 rounded-2xl shadow-2xl p-6 flex flex-col items-center animate-fade-in">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
          onClick={() => setShow(false)}
        >
          <X size={22} />
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Enter the OTP
        </h2>

        {/* Email Info */}
        {email && (
          <p className="text-sm text-gray-600 text-center mb-6">
            OTP has been sent to <span className="font-medium">{email}</span>
          </p>
        )}

        {/* OTP Input */}
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          className="w-full text-center px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black mb-4"
        />

        {/* Submit Button */}
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
