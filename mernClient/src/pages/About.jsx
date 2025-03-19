import React, { useState,useEffect } from 'react';
import about_img from "./images/about-us-img.png";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useAuth } from '../store/auth';

const About = () => {
  const { uData } = useAuth();
  const { isLoggedIn } = useAuth();

  return <div className="about-page"><div className='about-container'><div className="row">
  <div className="col-md-6">
    <img src={about_img} alt="Shubham_M" className='about-img img-fluid' />
  </div>
  <div className="col-md-6">
    <div className="about-us-content">
    {isLoggedIn?<h5>Welcome <span className="home-username">@{uData.username},</span></h5>:""}
      <h1>Why Choose Us?</h1>
      <p className='mt-3'><h6>Student | Graphic Designer | Full-Stack Developer (MERN Stack)</h6>
I am a creative student passionate about graphic design and technology. With a strong foundation in the MERN stack (MongoDB, Express, React, Node.js), I develop dynamic and user-friendly web applications.
Focused on upgrading my skills, I strive to merge creativity with functionality in every project I take on.
<br></br>
<h6 className='mt-2'>Services Offered---</h6>
Graphic Design: Logos, branding, and visuals.<br></br>
Web Development: Full-stack applications (MERN).<br></br>
If you're looking for quality design or development services, feel free to contact me. Let's create something amazing together!</p>
      <Link to="/contact"><button className="contact-us-btn btn btn-sm text-light mt-2 px-2 py-1">Contact us</button></Link>
      </div>
  </div>
</div></div>
{/* SKills higlighting */}
<div className="skills-highlights">
  <div className="row main-row">
    <div className="col-md-6">
      <div className="row secondary-row">
        <div className="col-6">
          <div className="skill-col">
            <h3 className='text-dark'>24/7</h3>
            <p>Services & Support</p>
          </div>
        </div>
        <div className="col-6">
          <div className="skill-col">
            <h3 className='text-dark'>$</h3>
            <p>Affordable Services</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row secondary-row">
        <div className="col-6">
          <div className="skill-col">
            <h3 className='text-dark'>10+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="col-6">
          <div className="skill-col">
            <h3 className='text-dark'>Community</h3>
            <p>Making Connections</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<Footer/>
      </div>;
};

export default About;
