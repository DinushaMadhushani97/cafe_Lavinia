// src/pages/Admin.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

const Admin = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get("/api/items");
      setItems(data);
    };
    fetchItems();
  }, []);

  const addItem = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/items", { name, description, price });
      window.location.reload();
    } catch (error) {
      console.error("Error adding item");
    }
  };

  return (
    <Container className="mt-5">
      <h1>Admin Dashboard</h1>
      <Form onSubmit={addItem} className="mb-4">
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Item price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>

      <h2>Menu Items</h2>
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

export default Admin;
