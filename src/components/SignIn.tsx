// components/SignIn.tsx
import React, { useState } from 'react';

const validMobiles = [
  '8500081797',
  '7893711797',
  '9298252869',
  '9346136125',
  '9347961139',
  '9059383281',
  '9182608020',
  '8712186549',
  '9494983177',
  '6302334451',
];

const SignIn: React.FC<{ onNext: (mobile: string) => void }> = ({ onNext }) => {
  const [mobile, setMobile] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10 && validMobiles.includes(mobile)) {
      onNext(mobile);
    } else {
      alert('❌ Enter a valid registered 10-digit number');
    }
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
