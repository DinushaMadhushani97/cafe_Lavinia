// src/pages/Menu.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card, Row, Col } from "react-bootstrap";

const Menu = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get("/api/items");
      setItems(data);
    };
    fetchItems();
  }, []);

  return (
    <Container className="mt-5">
      <h1 className="text-center">Our Menu</h1>
      <Row>
        {items.map((item) => (
          <Col key={item._id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text><strong>Price: ${item.price}</strong></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
