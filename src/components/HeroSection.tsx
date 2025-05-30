"use client";

import React from 'react';
import { Container, Row, Col, Button, Input, InputGroup } from 'reactstrap';

const HeroSection: React.FC = () => {
  return (
    <div className="swiggy-bg-orange py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold text-white mb-3">
              Order food & groceries. Discover best restaurants. Swiggy it!
            </h1>
            <div className=" d flex  justify-content-aroundmt-4">
              <InputGroup className="mb-3">
                <Input 
                  placeholder="Enter your delivery location" 
                  className="py-3 border-0"
                />
                <Button color="dark" className="px-4">
                  Find Food
                </Button>
              </InputGroup>
            </div>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            <div className="position-relative">
              {/* This would be replaced with actual food images */}
              <div className="bg-light rounded p-4 text-center">
                <p className="mb-0 fs-5">Food delivery image placeholder</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
