import React, { useEffect} from 'react';
import {Link} from "react-router-dom";
import VanillaTilt from 'vanilla-tilt'; // Import the VanillaTilt library
import Footer from '../components/Footer';
import logo_service from "./images/logo-design.png";
import web_design_service from "./images/web-design.png";
import web_develop_service from "./images/web-develop.png";
import { useAuth } from '../store/auth';


const Services = () => {
  // const cardRef = useRef(null); // Creating a ref for the first card
  const {service}=useAuth();

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      VanillaTilt.init(card, {
        max: 15,
        speed: 400,
        glare: true,
        maxGlare: 0.2,
      });
    });

    // Cleanup on component unmount
    return () => {
      cards.forEach((card) => {
        if (card.vanillaTilt) {
          card.vanillaTilt.destroy(); // Cleanup
        }
      });
    };
  }, []); // Empty dependency array means this runs once when the component mounts

   // Check if service is an array and contains items
   if (!Array.isArray(service) || service.length === 0) {
    return <div><div className="services-container">
    <header className='service-header'>
  <h1 className="login-header text-light mt-1">Services</h1><hr className='box-border' /></header><br />
  <h2 className='na-service text-center text-light'>No Services Available!</h2>
  </div></div>; // Add a fallback if service is not an array or is empty
  }

  return (
    <div>
        <div className="services-container">
          <header className='service-header'>
        <h1 className="login-header text-light mt-1">Services</h1><hr className='box-border' /></header><br />
        <div className="service-list">
          <div className="row wrapper">
          {service.map((curElem, index) => {
      const { service_name, price, description } = curElem;
      return (
        <div className="col-md-3 container-01" key={index}>
          <div className="card card-01">
            <div className="card-img w-100">
              <img src={logo_service} alt="logo-design" width="100%" />
            </div>
            <div className="card-details">
              <h3>{service_name}</h3>
              <p>{description}</p>
              <p className='service-price'>{price}</p>
              {/* <button className='btn btn-primary btn-sm'><Link to="/contact">Contact</Link></button> */}
            </div>
          </div>
        </div>
      )
    })
}


          </div>
        </div>
        </div>
      <Footer/>
    </div>
    
  )
  
}


export default Services


