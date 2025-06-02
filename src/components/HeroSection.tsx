"use client";

import React from 'react';
import { Container, Button, Input, InputGroup } from 'reactstrap';

const HeroSection: React.FC = () => {
  return (
    <div className="swiggy-bg-orange py-5">
      <div className="text-white justify-contetnt-center text-center fw-bold mb-4">
      <p>Order food & groceries. Discover best restaurants. Swiggy it!</p></div>
      <div className="d-flex justify-content-center gap-4 p-4">
        
  <div className="flex items-center border rounded-full px-4 py-2 bg-white w-80">
    <span className="text-gray-400 mr-2">📍</span>
    <input
      type="text"
      placeholder="Enter your delivery location"
      className="outline-none w-full"
    />
    <span className="ml-2">⌄</span>
  </div>
  <div className="flex items-center border rounded-full px-4 py-2 bg-white w-full max-w-md">
    <input
      type="text"
      placeholder="Search for restaurant, item or more"
      className="outline-none w-full"
    />
    <button>
      🔍
    </button>
  </div>
</div>

    </div>
  );
};

export default HeroSection;
