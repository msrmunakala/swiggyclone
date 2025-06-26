"use client";

import React, { useState } from 'react';
import axios from 'axios';
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
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert('❌ Please enter both username and password');
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post('http://127.0.0.1:8004/user-login', {
        username,
        password,
      })

      if (response.status === 200 && response.data.token) {
        const { token, username: returnedUsername } = response.data;

        localStorage.setItem('authToken', token);
        localStorage.setItem('username', returnedUsername);

        alert(`✅ Welcome, ${returnedUsername}!`);
        router.push('/dashboard');

        setShowModal(false);
        setUsername('');
        setPassword('');
      } else {
        alert('❌ Login failed. Invalid response.');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const data = error.response?.data as { detail?: string; message?: string } | undefined;
        const message = data?.detail || data?.message || '❌ Login failed. Check your credentials or server.';
        alert(message);
      } else {
        console.error('Unknown error:', error);
        alert('❌ An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

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
                  onClick={() => setShowModal(true)}
                >
                  Login
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      <Modal isOpen={showModal} toggle={() => setShowModal(false)} centered>
        <ModalBody>
          <div className="p-3">
            <h5 className="fw-bold mb-3">Login</h5>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control mb-3"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3"
                required
              />
              <button
                type="submit"
                className="btn btn-dark w-100 rounded-pill"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;
