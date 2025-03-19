import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Link} from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
<footer className="text-center text-lg-start text-muted">
  {/* <!-- Section: Social media --> */}
  <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom upper-section">

    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  
    <div>
      <Link to="#" className="me-4">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link to="https://instagram.com/shubh_graphixx" className="me-4">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/shubham-m77" className="me-4">
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link to="https://github.com/shubham-m77" className="me-4">
        <i className="fab fa-github"></i>
      </Link>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
   <section className="second-section">
    <div className="footer-container text-center text-md-start">
      <div className="row">
      
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">
  
          <h6 className="text-uppercase fw-bold mb-2">
            <i className="fas fa-gem me-3"></i>ShubhGraphiX
          </h6>
          <p>
            Website based on Portfolio or Showcasing my skills and services for the Digital era,
            If you are interested/work with me, then contact us.
          </p>
        </div>

        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-2">
            Useful links
          </h6>
          <p>
            <Link to="/" className="">Home</Link>
          </p>
          <p>
            <Link to="/about" className="">About</Link>
          </p>
          <p>
            <Link to="/contact" className="">Contact us</Link>
          </p>
          <p>
           <Link to="/admin" className="">Admin Page</Link> 
          </p>
        </div>
        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-2">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Wazirabad, Sector 52 Gurgaon Haryana 122003</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            shubham.m9022@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> +91 8595436518</p>
        </div>

      </div>

    </div>
    <div className="text-center p-4 copyright-dtl">
    © 2025 Copyright: @shubh_graphixx </div>
  </section>
</footer>
</div>
    </div>
  )
}

export default Footer;
