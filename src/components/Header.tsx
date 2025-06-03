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
  Modal,
  ModalBody,
} from 'reactstrap';
import Image from 'next/image';
import SignIn from './SignIn';
import OtpVerify from './OtpVerify';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState<'signin' | 'otp'>('signin');
  const [mobile, setMobile] = useState('');

  const handleSignIn = (number: string) => {
    setMobile(number);
    setStep('otp');
  };

  const handleBack = () => setStep('signin');

  return (
    <>
      <Navbar expand="md" className="bg-orange py-3" container={false} style={{ backgroundColor: '#fc8019' }}>
        <Container fluid className="d-flex justify-content-between align-items-center px-4">
          <NavbarBrand href="/" className="d-flex align-items-center text-white fw-bold fs-4 m-0">
            <Image
              src="/swiggy-logo-icon.png"
              alt="Swiggy"
              width={100}
              height={50}
              className="me-2"
            />
          </NavbarBrand>

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
                <Button
                  color="light"
                  className="fw-semibold text-dark px-4 rounded-pill"
                  onClick={() => {
                    setStep('signin');
                    setShowModal(true);
                  }}
                >
                  Sign in
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      <Modal isOpen={showModal} toggle={() => setShowModal(false)} centered>
        <ModalBody>
          {step === 'signin' ? (
            <SignIn onNext={handleSignIn} />
          ) : (
            <OtpVerify mobile={mobile} onBack={handleBack} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;
