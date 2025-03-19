import React, { useState, useEffect } from 'react';
import contact_img from "./images/contact-us-img.png";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useAuth } from '../store/auth';

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  });
  const [successMessage, setSuccessMessage] = useState(""); // ✅ Success message state
  const [showSuccess, setShowSuccess] = useState(false); // ✅ Control animation
  const [user, setUser] = useState(true);
  const { uData, isLoggedIn } = useAuth();
  useEffect(() => {
    if (user && uData) {
      setContact({
        username: uData.username,
        email: uData.email,
        message: ""
      });
      setUser(false);
    }
  }, [uData, user]); // This effect runs when `uData` or `user` changes

  const userHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  try {
    const response=await fetch("http://localhost:2000/form/contact",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(contact)
    });
    if(response.ok){

      setSuccessMessage("Message Sent Successfully! "); // ✅ Set message
      setShowSuccess(true); // ✅ Show animation

      setTimeout(() => {
        setShowSuccess(false); // Hide after animation
        setContact({ message: "" }); // Reset form
      }, 3000);
    }
  console.log(data);
  setContact({message: "",}); // ✅ Reset form
    }
     catch (error) {
    console.log(error);
  }
  };

  return (
    <div>
      <div className='contact-container'>
        <div className="row">
          <div className="col-md-6">
            <img src={contact_img} alt="Contact_us" className='about-img img-fluid' />
          </div>
          <div className="col-md-6">
            <div className="contact-form px-3 bg-dark rounded pt-2 pb-1">
              <h2 className="login-header text-light mt-1">Contact us for any query</h2><hr className='box-border' /><br />
              {/* ✅ Animated Success Message */}
              {showSuccess && (
                <div className="success-message">{successMessage} <i className="fa-solid fa-circle-check"></i></div>
              )}
              <form onSubmit={handleSubmit} className='login-form'>
                <div className="form-input">
                  <label htmlFor="username">Username</label><br />
                  <input
                    type="text"
                    name='username'
                    onChange={userHandler}
              value={isLoggedIn?contact.username:""}      
                    placeholder="Enter Username"
                    required
                    autoComplete='off'
                    className='form-control'
                    id='contact-username'
                  />
                </div>

                <div className="form-input pt-3">
                  <label htmlFor="email">Email</label><br />
                  <input
                    type="email"
                    name='email'
                    onChange={userHandler}
                    value={isLoggedIn?contact.email:""}   
                    placeholder="Enter your email"
                    required
                    autoComplete='off'
                    className='form-control'
                    id='contact-email'
                  />
                </div>

                <div className="form-input pt-3">
                  <label htmlFor="message">Message</label><br />
                  <textarea
                    type="text"
                    name='message'
                    onChange={userHandler}
                    value={contact.message}
                    placeholder="Enter your query or message"
                    required
                    autoComplete='off'
                    className='form-control'
                    rows="7"
                    id='message-box'
                  />
                </div>
                <div className="login-btn py-3 d-flex align-items-center justify-content-center">
                  <button type="submit" className='btn btn-primary rounded-pill contact-btn'>
                    Submit Request <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7281.9588274565895!2d86.53642248608868!3d24.13736109136904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1740651516631!5m2!1sen!2sin"
        width="100%" height="300"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='google-location'
      ></iframe>

      <Footer />
    </div>
  );
}

export default Contact;
