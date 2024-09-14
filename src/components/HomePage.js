// src/components/HomePage.js
import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Welcome to Eventify</Card.Title>
              <Card.Text>
                Manage and organize events effortlessly with our comprehensive event management system. Register or log in to get started.
              </Card.Text>
              <Button variant="primary" as={Link} to="/register" className="m-2">
                Register
              </Button>
              <Button variant="secondary" as={Link} to="/login" className="m-2">
                Login
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
