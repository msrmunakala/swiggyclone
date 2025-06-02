"use client";

import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap';

interface RestaurantCardProps {
  name: string;
  rating: string;
  cuisine: string;
  price: string;
 
  distance: string;
  offers: string[];
  
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  name, rating, cuisine, price, distance, offers, 
}) => {
  return (
    <Card className="restaurant-card border-0 shadow-sm h-100 mb-4">
      <div className="position-relative" style={{ height: '180px', overflow: 'hidden' }}>
        {/* This would be replaced with actual restaurant images */}
        <div className="bg-light w-100 h-100 d-flex align-items-center justify-content-center">
          <span className="text-muted">Restaurant Image</span>
        </div>
        <Badge 
          color="success" 
          className="position-absolute bottom-0 end-0 mb-2 me-2"
        >
          {rating} ★
        </Badge>
      </div>
      <CardBody>
        <CardTitle tag="h5" className="fw-bold mb-1">{name}</CardTitle>
        <CardText className="text-muted small mb-1">{cuisine}</CardText>
        <CardText className="small mb-2">
          <span>{price}</span>
          <span className="mx-2">•</span>
          <span>{distance}</span>
        </CardText>
        <div className="border-top pt-2 mt-2">
          {offers.map((offer, index) => (
            <div key={index} className="d-flex align-items-center mb-1">
              <i className="bi bi-tag-fill me-2 text-success"></i>
              <small>{offer}</small>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

const RestaurantSection: React.FC = () => {
  const restaurants = [
    {
      name: 'The Bier Library Brewery & Kitchen',
      rating: '4.4',
      cuisine: 'European • Pizza',
      price: '₹1800 for two',
      location: 'Koramangala, Bangalore',
      distance: '6.3 km',
      offers: ['Flat 10% off on pre-booking', 'Up to 10% off with bank offers'],
      imageSrc: '/restaurant1.png'
    },
    {
      name: 'Sriracha',
      rating: '4.2',
      cuisine: 'Asian',
      price: '₹1600 for two',
      location: 'UB City, Vittal Mallya Road, Bangalore',
      distance: '0.3 km',
      offers: ['Table booking', 'Flat 10% off on pre-booking', 'Up to 10% off with bank offers'],
      imageSrc: '/restaurant2.png'
    },
    {
      name: 'SodaBottleOpenerWala',
      rating: '4.2',
      cuisine: 'Parsi • Iranian',
      price: '₹1500 for two',
      location: 'Lavelle Road, Bangalore',
      distance: '0.5 km',
      offers: ['Flat 15% off on pre-booking', 'Up to 10% off with bank offers'],
      imageSrc: '/restaurant3.png'
    },
    {
      name: 'Plan B',
      rating: '3.7',
      cuisine: 'American • Pizza',
      price: '₹1800 for two',
      location: 'GT World Mall, Magadi Road, Bangalore',
      distance: '4.6 km',
      offers: ['Flat 15% off on walk-in', 'Up to 10% off with bank offers'],
      imageSrc: '/restaurant4.png'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="mb-4 fw-bold">Discover best restaurants on Dineout</h2>
        <Row>
          {restaurants.map((restaurant, index) => (
            <Col lg={3} md={6} key={index}>
              <RestaurantCard {...restaurant} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RestaurantSection;
