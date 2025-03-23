import React, { useState } from 'react';
import login_img from "./images/login-img.png";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import { useAuth } from "../store/auth.jsx";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const API_URI=process.env.SERVER_URL || "https://shubh-graphix.onrender.com";

  const userHandler = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    setUser({
      ...user,
      [name]: val,
    });
  };

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URI}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      storeTokenInLS(data.token);
      setUser({ email: "", password: "" });
      toast.success("Login Successful");
      setTimeout(function () {
        navigate("/");
      }, 2500);
    } else {
      toast.error(data.extDetails ? data.extDetails : data.msg);
    }
  };

  return (
    <div>
      <section>
        <main>
          <div className="container">
            <div className="login-section row">
              <div className="col-md-6">
                <div className="login-img">
                  <img src={login_img} alt="login-img" />
                </div>
              </div>
              <div className="col-md-6">
                <div></div>
                <div className="loginForm px-3 bg-dark rounded pt-2 pb-1">
                  <h2 className="login-header text-light mt-1">Login/Sign-in</h2>
                  <hr className="box-border" />
                  <br />
                  <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-input pt-3">
                      <label htmlFor="email">Email</label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={userHandler}
                        placeholder="Enter your email"
                        className="form-control"
                        id="email"
                      />
                    </div>

                    <div className="form-input pt-3">
                      <label htmlFor="password">Password</label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={userHandler}
                        placeholder="Enter your password"
                        autoComplete="off"
                        className="form-control"
                        id="password"
                      />
                    </div>
                    <div className="login-btn py-3 d-flex align-items-center justify-content-center">
                      <button type="submit" className="btn btn-primary rounded-pill signup-btn">
                        Login Now <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                  <p className="text-light text-center reg-login-btn-text">
                    Don't have an Account?{" "}
                    <Link to="/register" className="sign-semi-btn px-2 py-1">
                      Sign-up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
