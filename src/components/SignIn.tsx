// components/SignIn.tsx
import React, { useState } from 'react';

const SignIn: React.FC<{ onNext: (mobile: string) => void }> = ({ onNext }) => {
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) onNext(mobile);
    else alert('Enter a valid 10-digit number');
  };

  return (
    <div className="p-4">
      <h5 className="mb-3 fw-bold">Sign In / Sign Up</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="form-control mb-3"
          maxLength={10}
        />
        <button type="submit" className="btn btn-dark w-100 rounded-pill">
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignIn;
