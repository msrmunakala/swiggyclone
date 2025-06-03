// components/OtpVerify.tsx
import React, { useState } from 'react';

const OtpVerify: React.FC<{ mobile: string; onBack: () => void }> = ({ mobile, onBack }) => {
  const [otp, setOtp] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '1234') alert('Logged in!');
    else alert('Invalid OTP');
  };

  return (
    <div className="p-4">
      <h6 className="mb-3">Enter OTP sent to {mobile}</h6>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="form-control mb-3"
          maxLength={4}
        />
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-link p-0" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="btn btn-dark rounded-pill px-4">
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default OtpVerify;
