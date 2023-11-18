import React, { useState } from 'react';
// import './login.css';
import { useNavigate } from 'react-router-dom';
import Header from "../home/Header/Header";
import Footer from "../home/Footer/Footer";

import axios from 'axios'; // Corrected import


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    reenterPassword: '',
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate fields (add more validation as needed)
    // ...

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Data:', formData);

      const url = 'http://localhost/DRAW/connection/users/register.php';

      axios
        .post(url, formData)
        .then((response) => {
          console.log('Response from PHP:', response.data);
          navigate('/signin');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.log('Form data is invalid');
    }
  };

 
    return (
      <section className="login pt-100">
        <Header />
        <div className="container">
          <div className="billing-details">
            <h2 className="checkout-title text-uppercase text-center mb-30">Create Account</h2>
            <form className="checkout-form" onSubmit={submitData}>
              {/* Label and input for First Name */}
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="form-control"
                  placeholder="First Name"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <div className="error-message">{errors.firstName}</div>}
              </div>
              <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                required
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && <div className="error-message">{errors.lastName}</div>}
            </div>
            <div className="form-group">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email Address"
                required
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <div className="error-message">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input
                type="number"
                className="form-control"
                placeholder="Phone Number"
                required
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && <div className="error-message">{errors.phone}</div>}
            </div>
            <div className="form-group">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Address"
                required
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {errors.address && <div className="error-message">{errors.address}</div>}
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                required
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <div className="error-message">{errors.password}</div>}
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter Password"
                required
                name="reenterPassword"
                value={formData.reenterPassword}
                onChange={handleInputChange}
              />
              {errors.reenterPassword && <div className="error-message">{errors.reenterPassword}</div>}
            </div>
            <div className="login-btn-g center-button">
              <button name="submit" type="submit" className="btn btn-color center-button">
                Sign up
              </button>
            </div>
            <div className="new-account text-center mt-20">
              <span>Already have an account with us</span>
              <a
                className="link"
                title="Create New Account"
                href="signin"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/signin');
                }}
              >
                Login Here
              </a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Register;