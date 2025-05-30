"use client";

import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const AppDownloadSection: React.FC = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={2} className="text-center text-lg-start mb-4 mb-lg-0">
            <div className="swiggy-bg-orange p-3 d-inline-flex rounded-circle">
              <span className="fs-4 fw-bold">Swiggy</span>
            </div>
          </Col>
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="mb-3">Get the Swiggy App now!</h2>
            <p className="mb-0">For best offers and discounts curated specially for you.</p>
          </Col>
          <Col lg={4} className="text-center text-lg-end">
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-end">
              <Button color="light" className="mb-3 mb-sm-0 me-sm-3 px-4 py-2">
                <i className="bi bi-apple me-2"></i>App Store
              </Button>
              <Button color="light" className="px-4 py-2">
                <i className="bi bi-google-play me-2"></i>Google Play
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AppDownloadSection;
