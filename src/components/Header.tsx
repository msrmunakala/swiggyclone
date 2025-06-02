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
  Container
} from 'reactstrap';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
            <Navbar expand="md" className="swiggy-bg-orange py-3 m-0 w-100" container={false}>
  <Container fluid className="d-flex justify-content-between align-items-center">
    <NavbarBrand href="/" className="text-white fw-bold">
      Swiggy
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
