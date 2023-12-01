
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';
export default function Signup() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        phone: '',
        city: '',
        address: '',
        reenterPassword: '',
      });
      const [errors, setErrors] = useState({});

      const navigate = useNavigate();
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = {};
    
        // Validate fields (add more validation as needed)
        const fNameRE=/[a-zA-Z]{1,}/g;
        if(formData.fname.match(fNameRE)!=formData.fname){
          newErrors.fname = 'Letters Only!!';
          isValid = false;
        }


        const lNameRE=/^[a-zA-Z]{1,}$/g;
        if(!formData.lname.match(lNameRE)){
          newErrors.lname = 'Letters Only!!';
          isValid = false;
        }


        const emailRE=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!formData.email.match(emailRE)){
          newErrors.email = 'Invalid Email!!';
          isValid = false;
        }


        const upperCaseLetters = /([A-Z])/g;
        const lowerCaseLetters = /(?=.*[a-z])/g;
        const numbers = /(?=.*\d)/g;
        // const noSpace=/^\S*$/;
        const special=/[!@#/?\$%\^\&*\)\(+=._-]{1,}/g;
        if(!(formData.password.match(upperCaseLetters) && formData.password.match(lowerCaseLetters) && formData.password.match(numbers) && formData.password.match(special) && formData.password.length>=8 &&formData.password.length<=32)){
          newErrors.password ='Password must be 8-32 characters and include uppercase and lowercase letters, number and special character';
          isValid = false;
        }


        if (formData.password !== formData.reenterPassword) {
              newErrors.reenterPassword = 'Passwords do not match';
              isValid = false;
        }
        

        const mobileRE=/^\d{10}$/;
        if(!formData.phone.match(mobileRE)){
          newErrors.phone = 'Numbers Only (10 Digits)';
          isValid = false;
        }


        if(formData.city===''){
          newErrors.city='City Required';
          isValid=false;
        }
        
        if(formData.address===''){
          newErrors.address = 'Address is required';
          isValid = false;
        }
        
    
        setErrors(newErrors);
        return isValid;
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle form submission
      const submitData = (e) => {
        e.preventDefault();
    
        // Validate the form before submitting
        if (validateForm()) {
        //   // Form data is valid, proceed with submission
          console.log('Form Data:', formData);
    
          const url = 'http://localhost/DRAW/connection/users/register.php';
    
          axios.post(url, formData)
            .then((response) => {
              if(response.data.message=='Data stored successfully'){

                console.log('Response from PHP:', response.data.message);
                navigate('/signin');
              }else{
                const newErrors = {};
                newErrors.error = "ERROR!! Try again...";
                setErrors(newErrors)
              }
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        } else {
          // Form data is invalid, display error messages
          console.log('Form data is invalid');
        }
      };
    
      return (
        <section className="containerr pt-100" style={{color:'black'}}>
          <div className="login-container">
          <div class="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
                <h1 class="opacity">Sign Up</h1>
              
              <form className="checkout-form" onSubmit={submitData}>
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    required
                    name="fname"
                    onChange={handleInputChange}
                  />
                  {errors.fname && <div className="error-message">{errors.fname}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    required
                    name="lname"
                    onChange={handleInputChange}
                  />
                  {errors.lname && <div className="error-message">{errors.lname}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                    name="email"
                    onChange={handleInputChange}
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your Password"
                    required
                    name="password"
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
                    onChange={handleInputChange}
                  />
                  {errors.reenterPassword && <div className="error-message">{errors.reenterPassword}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    name="phone"
                    onChange={handleInputChange}
                  />
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label">City</label>
                  <select className="form-control" name="city" onChange={handleInputChange} defaultValue='City'>
                    <option value="City" disabled >City</option>
                    <option value="Amman">Amman</option>
                    <option value="Ajloun">Ajloun</option>
                    <option value="Aqaba">Aqaba</option>
                    <option value="Balqa">Balqa</option>
                    <option value="Irbid">Irbid</option>
                    <option value="Jerash">Jerash</option>
                    <option value="Karak">Karak</option>
                    <option value="Ma'an">Ma'an</option>
                    <option value="Madaba">Madaba</option>
                    <option value="Mafraq">Mafraq</option>
                    <option value="Tafilah">Tafilah</option>
                    <option value="Zarqa">Zarqa</option>
                  </select>
                  {errors.city && <div className="error-message">{errors.city}</div>}
                </div>
                <div className="form-group">
                  <label className="form-label">Address</label>
                  <textarea className="form-control" placeholder="Address" required name="address" onChange={handleInputChange}>
                  </textarea>
                  {errors.address && <div className="error-message">{errors.address}</div>}
                </div>

                <div className="login-btn-g center-button">
                  <button name="submit" type="submit" className="btn btn-color center-button">
                    Sign up
                  </button>
                  {errors.error && <div className="error-message">{errors.error}</div>}
                </div>
                <div className="new-account text-center mt-20">
                  <span>Already have an account ?</span>
                  <Link to="/signin">Log in </Link>
                 
                </div>
              </form>
            </div>
          </div>
        </section>
      );
};