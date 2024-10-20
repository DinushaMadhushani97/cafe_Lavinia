// src/pages/PrivacyPolicy.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles.css'; // Ensure to import your CSS

const PrivacyPolicy = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">Privacy Policy</h1>
            <Row>
                <Col>
                    <Card className="p-4" style={{ backgroundColor: '#f9f9f9', border: 'none' }}>
                        <Card.Body>
                            <p>
                                At Cafe Lavinia, we value your privacy and are committed to protecting your personal information.
                                This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website
                                or use our services.
                            </p>

                            <h3 className="mt-4">Information We Collect</h3>
                            <p>
                                We may collect personal information from you in various ways, including when you visit our site, register,
                                place an order, subscribe to our newsletter, or interact with other activities, services, features, or resources
                                we make available on our site. You may be asked for your name, email address, mailing address, phone number, 
                                and payment information. You may, however, visit our site anonymously.
                            </p>

                            <h3 className="mt-4">How We Use Your Information</h3>
                            <p>We may use the information we collect from you in the following ways:</p>
                            <ul className="privacy-list">
                                <li>To improve customer service.</li>
                                <li>To personalize user experience.</li>
                                <li>To process transactions.</li>
                                <li>To send periodic emails regarding your order or other products and services.</li>
                            </ul>

                            <h3 className="mt-4">How We Protect Your Information</h3>
                            <p>
                                We adopt appropriate data collection, storage, and processing practices and security measures to protect
                                against unauthorized access, alteration, disclosure, or destruction of your personal information, username,
                                password, transaction information, and data stored on our site.
                            </p>

                            <h3 className="mt-4">Your Consent</h3>
                            <p>
                                By using our site, you consent to our Privacy Policy.
                            </p>

                            <h3 className="mt-4">Changes to Our Privacy Policy</h3>
                            <p>
                                Cafe Lavinia has the discretion to update this Privacy Policy at any time. When we do, we will revise
                                the updated date at the bottom of this page. We encourage users to frequently check this page for any
                                changes to stay informed about how we are helping to protect the personal information we collect.
                            </p>

                            <h3 className="mt-4">Contacting Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this
                                site, please contact us at:
                            </p>
                            <p>
                                <strong>Cafe Lavinia</strong><br />
                                Email: <a href="mailto:support@cafelavinia.com">support@cafelavinia.com</a><br />
                                Phone: (123) 456-7890
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PrivacyPolicy;
