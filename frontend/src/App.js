// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path if necessary
import Home from './pages/Home'; // Ensure this component exists
import Items from './pages/Items'; // Ensure this component exists
import Login from './pages/Login'; // Ensure this component exists
import Register from './pages/Register';
import About from './pages/About'; // Ensure this component exists
import PrivacyPolicy from './pages/PrivacyPolicy'; // Ensure this component exists
import Contact from './pages/Contact'; // Ensure this component exists
import './styles.css'; // Import your styles

const App = () => {
    return (
        <Router>
            <div className="main-content"> {/* Main content wrapper */}
                <Navbar />
                <div className="content"> {/* Content wrapper */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/items" element={<Items />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
                <footer className="footer">
                    <div className="container">
                        <span className="text-muted">© 2024 Cafe Lavinia. All rights reserved.</span>
                    </div>
                </footer>
            </div>
        </Router>
    );
};

export default App;
