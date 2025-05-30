"use client";

import React from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Company</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">About Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Swiggy Corporate</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Careers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Swiggy One</NavLink>
              </NavItem>
            </Nav>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Contact us</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Help & Support</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Partner with us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Ride with us</NavLink>
              </NavItem>
            </Nav>
          </Col>
          
          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="fw-bold mb-3">Available in:</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Bangalore</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Delhi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Mumbai</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="ps-0 text-muted">Pune</NavLink>
              </NavItem>
              <NavItem>
                <Button color="link" className="ps-0 text-muted">685 cities</Button>
              </NavItem>
            </Nav>
          </Col>
          
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-3">Social Links</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-muted">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-muted">
                <i className="bi bi-twitter fs-5"></i>
              </a>
            </div>
            
            <div className="mt-4">
              <a href="#" className="d-inline-block mb-2 me-2">
                <div className="border rounded p-2">
                  <span className="small">App Store</span>
                </div>
              </a>
              <a href="#" className="d-inline-block mb-2">
                <div className="border rounded p-2">
                  <span className="small">Google Play</span>
                </div>
              </a>
            </div>
          </Col>
        </Row>
        
        <div className="border-top pt-3">
          <p className="text-muted small mb-0">© 2025 Swiggy Limited</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
