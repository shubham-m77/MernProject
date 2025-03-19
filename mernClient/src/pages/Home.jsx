import React, { useState,useEffect } from 'react';
import home_img from "./images/homepage-img.png";
import black_bg from "./images/black-abstract-bg.jpg";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useAuth } from '../store/auth';

const Home = () => {
  const { uData } = useAuth();
  const {isLoggedIn}=useAuth();

  return <div><div className='container'><div className="row section-row">
      <div className="col-md-6">
        <div className="hero-content">
         {isLoggedIn?<h5>Hey <span className="home-username">@{uData.username},</span></h5>:""}
          
          <h1>Welcome to the World of Technology!</h1>
          <p className='mt-3'>I'm a passionate Full-Stack Developer, IT student, and Graphic Designer, all rolled into one. With a strong foundation in both development and design, I specialize in creating innovative and user-friendly applications that not only perform seamlessly but also look great.</p>
          <Link to="/"><button className="learn-more-btn btn btn-sm text-light mt-2 px-2 py-1">Learn More</button></Link>
          <Link to="/contact"><button className="contact-us-btn btn btn-sm text-light mt-2 ms-3 px-2 py-1">Contact us</button></Link>
          </div>
      </div>
      <div className="col-md-6">
        <img src={home_img} alt="Shubham_M" className='homepage-img img-fluid' />
      </div>
  </div>
  <div className="skills-highlights">
  <div className="row main-row">
    <div className="col-md-6">
      <div className="row secondary-row">
        <div className="col-6">
          <div className="skill-col">
            <h3>24/7</h3>
            <p>Services & Support</p>
          </div>
        </div>
        <div className="col-6">
          <div className="skill-col">
            <h3>$</h3>
            <p>Affordable Service</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row secondary-row">
        <div className="col-6">
          <div className="skill-col">
            <h3>10+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="col-6">
          <div className="skill-col">
            <h3>Community</h3>
            <p>Making Connections</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
      <Footer/>
  </div>;
};
export default Home;