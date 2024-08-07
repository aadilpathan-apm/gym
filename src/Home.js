// src/HomePage.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to FitLife Gym</h1>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#classes">Classes</a></li>
            <li><a href="#contact">Contact</a></li>
           
            <li><a href="/Login">Login</a></li>
          </ul>
        </nav>
      </header>
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>At FitLife Gym, we provide a welcoming and inclusive environment for all fitness levels.</p>
      </section>
      <section id="classes" className="classes-section">
        <h2>Our Classes</h2>
        <ul>
          <li>Yoga</li><br />
          <li>Cardio</li><br />
          <li>Strength Training</li><br />
        </ul>
      </section>
      
      <footer id="contact" className="footer">
        <h2>Contact Us</h2>
        <p>Email: contact@fitlifegym.com</p>
        <p>Phone: (123) 456-7890</p>
      </footer>
    </div>
  );
};

export default Home;