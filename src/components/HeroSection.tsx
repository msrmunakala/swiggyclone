"use client";

import React from 'react';
import { Button, Input } from 'reactstrap';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div
      className="position-relative swiggy-bg-orange overflow-hidden"
      style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '500px' }}
    >
      {/* Left Veggies Image */}
      <div
        className="position-absolute bottom-0 start-0"
        style={{ width: '280px', height: 'auto', zIndex: 0 }}
      >
        <Image
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="Veggies"
          width={280}
          height={300}
          priority
        />
      </div>

      {/* Right Sushi Image */}
      <div
        className="position-absolute bottom-0 end-0"
        style={{ width: '300px', height: 'auto', zIndex: 0 }}
      >
        <Image
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="Sushi"
          width={300}
          height={300}
          priority
        />
      </div>

      {/* Headline Text */}
      <div className="text-white text-center fw-bold mb-4 position-relative z-1">
        <h4>Order food & groceries. Discover best restaurants. Swiggy it!</h4>
      </div>

      {/* Search Fields */}
      <div className="d-flex justify-content-center gap-4 px-4 flex-wrap position-relative z-1">
        {/* Location Field */}
        <div className="d-flex align-items-center bg-white rounded-pill px-4 py-2 shadow" style={{ minWidth: '300px' }}>
          <span className="text-muted me-2">📍</span>
          <Input
            type="text"
            placeholder="Enter your delivery location"
            className="form-control border-0 shadow-none"
            style={{ flex: 1 }}
          />
          <span className="ms-2">⌄</span>
        </div>

        {/* Search Field */}
        <div className="d-flex align-items-center bg-white rounded-pill px-4 py-2 shadow" style={{ minWidth: '400px' }}>
          <Input
            type="text"
            placeholder="Search for restaurant, item or more"
            className="form-control border-0 shadow-none"
            style={{ flex: 1 }}
          />
          <Button className="btn btn-link p-0 ms-2">🔍</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
