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
  Input,
  InputGroup,
  Button,
  Container
} from 'reactstrap';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" className="py-3" color="light" container="fluid" sticky="top">
      <Container>
        <NavbarBrand href="/" className="d-flex align-items-center">
          <div className="position-relative" style={{ width: '130px', height: '40px' }}>
            {/* Replace with actual Swiggy logo */}
            <div className="swiggy-bg-orange text-white fw-bold p-2 rounded d-inline-flex align-items-center">
              <span className="fs-4">Swiggy</span>
            </div>
          </div>
        </NavbarBrand>
        
        <NavbarToggler onClick={toggle} />
        
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto align-items-center" navbar>
            <NavItem className="me-3">
              <NavLink href="#" className="text-dark">Swiggy Corporate</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink href="#" className="text-dark">Partner with us</NavLink>
            </NavItem>
            <NavItem className="me-3">
              <NavLink href="#" className="text-dark">Get the App</NavLink>
            </NavItem>
            <NavItem>
              <Button color="dark" className="rounded-pill px-4">Sign in</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
