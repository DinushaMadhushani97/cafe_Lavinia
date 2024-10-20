// src/pages/Home.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import '../styles.css'; // Ensure you import the updated CSS

const Home = () => {
  return (
    <div className="bg-image"> {/* Apply the background image class */}
      <Container fluid className="text-center">
        <Row>
          <Col>
            <h1 className="display-4">Welcome to Cafe Lavinia!</h1>
            <p className="lead">
              Enjoy the finest coffee and pastries in a cozy atmosphere.
            </p>
            <Button variant="light" href="/menu"> {/* Light button for contrast */}
              View Menu
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
