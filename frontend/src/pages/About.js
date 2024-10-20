import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import '../styles.css';

const About = () => {
    const teamMembers = [
        {
            name: 'Alice Johnson',
            role: 'Head Barista',
            imageUrl: require('../images/team/alice.jpg'), // Use require for local images
            description: 'Alice has been crafting delicious coffee for over 5 years. She believes in the art of making coffee and is always experimenting with new flavors.'
        },
        {
            name: 'Bob Smith',
            role: 'Chef',
            imageUrl: require('../images/team/bob.jpeg'), // Use require for local images
            description: 'Bob is our culinary wizard! He creates mouth-watering dishes using fresh, local ingredients.'
        },
        {
            name: 'Charlie Brown',
            role: 'Manager',
            imageUrl: require('../images/team/charlie.jpg'), // Use require for local images
            description: 'Charlie ensures that everything runs smoothly at Cafe Lavinia. With a passion for hospitality, he is always ready to greet our customers with a smile.'
        }
    ];

    return (
        <Container className="about-container mt-5">
            <h1>About Us</h1>
            <p>
                Welcome to Cafe Lavinia! We are dedicated to serving the best coffee and food in town. Our team is passionate about creating a warm and inviting atmosphere for all our guests.
            </p>
            <Row className="my-4">
                <Col md={6}>
                    <Image className="about-image" src={require('../images/about.jpg')} fluid rounded />
                </Col>
                <Col md={6}>
                    <h3>Our Story</h3>
                    <p>
                        At Cafe Lavinia, we believe in the power of community and the joy of sharing good food and coffee. Our cafe was founded in 2022 with the mission of providing a cozy space for people to relax, work, and connect.
                    </p>
                </Col>
            </Row>

            <h3 className="text-center my-4">Meet Our Team</h3>
            <Row>
                {teamMembers.map((member, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="team-card">
                            <Card.Img className="card-image" variant="top" src={member.imageUrl} />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                                <Card.Text>{member.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <h3 className="text-center my-4">Watch Our Story</h3>
            <div className="text-center">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Nu8kIIL-CDA" // Embed URL of your YouTube video
                    title="About Cafe Lavinia"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </Container>
    );
};

export default About;
