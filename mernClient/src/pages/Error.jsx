import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css';
const Error = () => {
  return (
    <div class="error-container">
    <div class="error-content">
    <h1 class="title">404
    <div class="aurora">
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
    </div>
  </h1>
      <h2 className="error-semi-msg">Sorry! Page not found</h2>
      <p class="error-message">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" class="home-btn  btn rounded-pill">Go Back Home</Link>
      <Link to="/contact" class="report-btn btn rounded-pill">Report Problem</Link>
    </div>
  </div>
  )
}

export default Error
