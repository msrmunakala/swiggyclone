"use client";

import React from 'react';


const FoodCategoryItem: React.FC<{ name: string; imageSrc: string }> = ({ name, imageSrc }) => (
  <div className="food-category-item text-center p-2">
    <div
      className="bg-light rounded-circle mx-auto mb-2"
      style={{ width: '80px', height: '80px', overflow: 'hidden' }}
    >
      <img
        src={imageSrc}
        alt={name}
        className="w-100 h-100 object-fit-cover"
        style={{ objectFit: 'cover' }}
      />
    </div>
    <p className="mb-0 mt-2">{name}</p>
  </div>
);

const FoodCategorySection: React.FC = () => {
  const categories = [
    {
      name: 'South Indian',
      imageSrc:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png',
    },
    {
      name: 'North Indian',
      imageSrc:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png',
    },
    {
      name: 'Biryani',
      imageSrc:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png',
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3 py-4">
      {categories.map((cat, index) => (
        <FoodCategoryItem key={index} name={cat.name} imageSrc={cat.imageSrc} />
      ))}
    </div>
  );
};

export default FoodCategorySection;
