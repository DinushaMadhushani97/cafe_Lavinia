// src/pages/Items.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Card, Row, Col, Spinner, Alert } from 'react-bootstrap';

const Items = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('/api/items'); // Adjust the endpoint if necessary
                setItems(response.data);
            } catch (err) {
                setError('Error fetching items. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return (
            <Container className="text-center mt-5">
                <Spinner animation="border" />
                <p>Loading items...</p>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-5">
                <Alert variant="danger">{error}</Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-5">
            <h1 className="text-center">Menu Items</h1>
            <Row>
                {items.map((item) => (
                    <Col md={4} key={item._id} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={item.imageUrl} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Text>
                                    <strong>Price: ${item.price}</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Items;
