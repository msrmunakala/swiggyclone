"use client";

import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

interface FoodCategoryProps {
  name: string;
  imageSrc: string;
}

const FoodCategory: React.FC<FoodCategoryProps> = ({ name, imageSrc }) => {
  return (
    <div className="food-category-item text-center p-2">
      <div className="bg-light rounded-circle mx-auto mb-2" style={{ width: '80px', height: '80px', overflow: 'hidden' }}>
        {/* This would be replaced with actual food category images */}
        <div className="w-100 h-100 d-flex align-items-center justify-content-center">
          <span className="text-muted small">Image</span>
        </div>
      </div>
      <p className="mb-0 mt-2">{name}</p>
    </div>
  );
};

const FoodCategorySection: React.FC = () => {
  const categories = [
    { name: 'Vada', imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png' },
    { name: 'idli', imageSrc: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Poha-1.png' },
    { name: 'Cake', imageSrc: '/cake.png' },
    { name: 'Poori', imageSrc: '/poori.png' },
    { name: 'Chole Bhature', imageSrc: '/chole-bhature.png' },
    { name: 'Salad', imageSrc: '/salad.png' },
    { name: 'Burger', imageSrc: '/burger.png' },
    { name: 'Coffee', imageSrc: '/coffee.png' },
    { name: 'Shake', imageSrc: '/shake.png' },
    { name: 'Pizza', imageSrc: '/pizza.png' },
    { name: 'Pastry', imageSrc: '/pastry.png' },
    { name: 'Rolls', imageSrc: '/rolls.png' }
  ];

  return (
    <section className="py-4">
      <Container>
        <div className="position-relative">
          <div className="d-flex overflow-auto pb-3" style={{ scrollbarWidth: 'none' }}>
            {categories.map((category, index) => (
              <div key={index} className="px-2" style={{ minWidth: '100px' }}>
                <FoodCategory {...category} />
              </div>
            ))}
          </div>
          <button className="custom-carousel-control position-absolute start-0 top-50 translate-middle-y border-0">
            <span>←</span>
          </button>
          <button className="custom-carousel-control position-absolute end-0 top-50 translate-middle-y border-0">
            <span>→</span>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default FoodCategorySection;
