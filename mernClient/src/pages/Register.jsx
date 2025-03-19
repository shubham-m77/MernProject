import React, { useState } from 'react'
import register_img from "./images/register-img.png";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Login from "./Login";
import Footer from '../components/Footer.jsx';
import {useAuth} from "../store/auth.jsx";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const navigate = useNavigate();
  const {storeTokenInLS}=useAuth();
  const userHandler = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let val = e.target.value;
    setUser({
      ...user,
      [name]: val,
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${process.env.SERVER_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(user)
    });
    const data=await response.json();
    if (response.ok) {
        storeTokenInLS(data.token);
        setUser({
        username: "",
        email: "",
        mobile: "",
        password: "",
      });
      toast.success("Sign-up Success");
              setTimeout(function(){
                navigate("/");},2500)
    }
    else{
      toast.error(data.extDetails?data.extDetails:data.msg);
    }
    
  }
  return (
    <div>
      <section>
        <main><div className="container">
          <div className="register-section row">
            <div className="col-md-6">
              <div className="register-img">
                <img src={register_img} alt="register-img" />
              </div></div>
            <div className=" col-md-6" >
              <div></div>
              <div className="register-form px-3 bg-dark rounded pt-2 pb-1">
                <h2 className="reg-header text-light mt-1">Register/Signup</h2><hr className='box-border' /><br />
                <form onSubmit={handleSubmit} className='reg-form'>
                  <div className="form-input"><label htmlFor="username">Username</label><br />
                    <input type="text" name='username' value={user.username} onChange={userHandler} placeholder="Enter your username"   autoComplete='off' className='form-control' id='username' />
                  </div>

                  <div className="form-input pt-3"><label htmlFor="email">Email</label><br />
                    <input type="email" name='email' value={user.email} onChange={userHandler} placeholder="Enter your email"   autoComplete='off' className='form-control' id='email' />
                  </div>

                  <div className="form-input pt-3"><label htmlFor="mobile">Mobile No.</label><br />
                    <input type="number" name='mobile' value={user.mobile} onChange={userHandler} placeholder="Enter your phone no."   autoComplete='off' className='form-control' id='mobile' />
                  </div>

                  <div className="form-input pt-3"><label htmlFor="password">Password</label><br />
                    <input type="password" name='password' value={user.password} onChange={userHandler} placeholder="Enter your password"   autoComplete='off' className='form-control' id='password' />
                  </div>
                  <div className="reg-btn py-3 d-flex align-items-center justify-content-center">
                    <button type="submit" className='btn btn-primary rounded-pill signup-btn' >Signup Now <i className="fa-solid fa-arrow-right"></i></button></div>
                </form>
                <p className='text-light text-center reg-login-btn-text'>Already have an Account? <Link to="/login" className="sign-semi-btn px-2 py-1">Log-in</Link></p>
              </div>
            </div>
          </div> </div>
        </main>
      </section>
      <Footer />
    </div>
  )
}

export default Register
