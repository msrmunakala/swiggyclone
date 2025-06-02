"use client";

import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Row, Col, Container } from 'reactstrap';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  offerText: string;
  imageSrc: string;
  bgColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, offerText, bgColor }) => {
  return (
    <Card className="border-0 h-100 shadow-sm">
      <CardBody className={`${bgColor} rounded p-4`}>
        <div className="d-flex flex-column h-100">
          <div>
            <CardTitle tag="h3" className="fw-bold mb-2">{title}</CardTitle>
            <CardText className="text-muted mb-3">{subtitle}</CardText>
            <div className="mb-4">
              <span className="fw-bold text-danger">{offerText}</span>
            </div>
          </div>
          <div className="mt-auto">
            <Button color="light" className="rounded-circle" style={{ width: '50px', height: '50px' }}>
              <i className="bi bi-arrow-right"></i>
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const ServiceSection: React.FC = () => {
  const services = [
    {
      title: 'FOOD DELIVERY',
      subtitle: 'FROM RESTAURANTS',
      offerText: 'UPTO 60% OFF',
      imageSrc: '/food-delivery.png',
      bgColor: 'bg-light'
    },
    {
      title: 'INSTAMART',
      subtitle: 'INSTANT GROCERY',
      offerText: 'UPTO 60% OFF',
      imageSrc: '/instamart.png',
      bgColor: 'bg-light'
    },
    {
      title: 'DINEOUT',
      subtitle: 'EAT OUT & SAVE MORE',
      offerText: 'UPTO 50% OFF',
      imageSrc: '/dineout.png',
      bgColor: 'bg-light'
    }
  ];

  return (
   <section className="w-100 swiggy-bg-orange py-5">
  <Container fluid className="p-0 m-0">
    <Row className="m-0 p-8">
      {services.map((service, index) => (
        <Col md={4} className="p-4" key={index}>
          <ServiceCard {...service} />
        </Col>
      ))}
    </Row>
  </Container>
</section>

  );
};

export default ServiceSection;
