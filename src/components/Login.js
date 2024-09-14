// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      setSuccess('Login successful!');
      setError('');
      // Handle success response, e.g., store token in localStorage and redirect
      localStorage.setItem('token', response.data.token);
      window.location.href = '/dashboard'; // Redirect to dashboard or another page
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed.');
      setSuccess('');
    }
  };

  return (
    <Container className="mt-5">
      <Form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <Form.Text className="text-muted">
          Don't have an account? <Link to="/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
