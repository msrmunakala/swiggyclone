"use client";

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  Button,
  Container,
} from 'reactstrap';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" className="bg-orange py-3" container={false} style={{ backgroundColor: '#fc8019' }}>
      <Container fluid className="d-flex justify-content-between align-items-center px-4">
        {/* Logo and Brand */}
        <NavbarBrand href="/" className="d-flex align-items-center text-white fw-bold fs-4 m-0">
          <Image
            src="/swiggy-logo-icon.png" // Add this image to your public folder
            alt="Swiggy"
            width={30}
            height={30}
            className="me-2"
          />
          Swiggy
        </NavbarBrand>

        {/* Toggler for mobile */}
        <NavbarToggler onClick={toggle} className="border-0" />

        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <Nav navbar className="align-items-center">
            <NavItem className="me-4">
              <NavLink href="#" className="text-white fw-semibold">
                Swiggy Corporate
              </NavLink>
            </NavItem>
            <NavItem className="me-4">
              <NavLink href="#" className="text-white fw-semibold">
                Partner with us
              </NavLink>
            </NavItem>
            <NavItem className="me-4">
              <Button
                color="link"
                className="text-white fw-semibold text-decoration-none d-flex align-items-center p-0"
              >
                Get the App <span className="ms-1">↗</span>
              </Button>
            </NavItem>
            <NavItem>
              <Button color="light" className="fw-semibold text-dark px-4 rounded-pill">
                Sign in
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
