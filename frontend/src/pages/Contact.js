// src/pages/ContactUs.js
import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import '../styles.css'; // Ensure to import your CSS

const ContactUs = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Contact Us</h1>
            <Row>
                <Col md={6}>
                    <h3 className="text-center">Our Location</h3>
                    <div className="map-container">
                        <iframe
                            title="Cafe Lavinia Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509545!2d144.95373531531565!3d-37.81627997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0d8e4b51%3A0x5045675218ceed20!2sCafe%20Lavinia!5e0!3m2!1sen!2sau!4v1637742092600!5m2!1sen!2sau"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </Col>
                <Col md={6}>
                    <Card className="p-4" style={{ backgroundColor: '#f9f9f9', border: 'none' }}>
                        <Card.Body>
                            <h3>Get in Touch</h3>
                            <Form>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" required />
                                </Form.Group>

                                <Form.Group controlId="formBasicMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Your message" required />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactUs;
