"use client";

import React from 'react';
import { Button } from 'reactstrap';

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
    <p className="mb-0 mt-2 small">{name}</p>
  </div>
);

const FoodCategorySection: React.FC = () => {
  const categories = [
    {
      name: 'South Indian',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png',
    },
    {
      name: 'North Indian',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png',
    },
    {
      name: 'Biryani',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png',
    },
    {
      name: 'Rolls',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png',
    },
    {
      name: 'Cake',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png',
    },
    {
      name: 'Burger',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png',
    },
    {
      name: 'Khichdi',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Khichdi.png',
    },
    {
      name: 'Idli',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png',
    },
    {
      name: 'Parotta',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Parotta.png',
    },
    {
      name: 'Chole Bhature',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chole%20Bhature.png',
    },
    {
      name: 'Vada',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Vada.png',
    },
    {
      name: 'Tea',
      imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Tea.png',
    },
  ];

  return (
    <section className="bg-white py-4">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {categories.map((cat, index) => (
            <FoodCategoryItem key={index} name={cat.name} imageSrc={cat.imageSrc} />
          ))}
        </div>

        <div className="text-center mt-4">
          <Button color="dark" className="px-4 rounded-pill">
           next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FoodCategorySection;
