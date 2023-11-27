// import React, { useState } from "react";
// import { BsCheckCircleFill } from "react-icons/bs";
// import { Link } from "react-router-dom";
// import { logoLight } from "../../assets/images";
// import axios from "axios";

// const SignUp = () => {
//   // ============= Initial State Start here =============
//   const [clientName, setClientName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [image, setImage] = useState("");  
//   const [checked, setChecked] = useState(false);
//   // ============= Initial State End here ===============
//   // ============= Error Msg Start here =================
//   const [errClientName, setErrClientName] = useState("");
//   const [errEmail, setErrEmail] = useState("");
//   const [errPhone, setErrPhone] = useState("");
//   const [errPassword, setErrPassword] = useState("");
//   const [errAddress, setErrAddress] = useState("");
//   const [errImage, setErrImage] = useState("");
  
//   // ============= Error Msg End here ===================
//   const [successMsg, setSuccessMsg] = useState("");
//   // ============= Event Handler Start here =============
//   const handleName = (e) => {
//     setClientName(e.target.value);
//     setErrClientName("");
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setErrEmail("");
//   };
//   const handlePhone = (e) => {
//     setPhone(e.target.value);
//     setErrPhone("");
//   };
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setErrPassword("");
//   };
//   const handleAddress = (e) => {
//     setAddress(e.target.value);
//     setErrAddress("");
//   };
//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
  
//     reader.onloadend = () => {
//       setImage(reader.result); // Store the base64-encoded content in state
//       setErrImage("");
//     };
  
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
  
  
//   // ============= Event Handler End here ===============
//   // ================= Email Validation start here =============
//   const EmailValidation = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
//   };
//   // ================= Email Validation End here ===============

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     if (checked) {
//       if (!clientName) {
//         setErrClientName("Enter your name");
//       }
//       if (!email) {
//         setErrEmail("Enter your email");
//       } else {
//         if (!EmailValidation(email)) {
//           setErrEmail("Enter a Valid email");
//         }
//       }
//       if (!phone) {
//         setErrPhone("Enter your phone number");
//       }
//       if (!password) {
//         setErrPassword("Create a password");
//       } else {
//         if (password.length < 6) {
//           setErrPassword("Passwords must be at least 6 characters");
//         }
//       }
//       if (!address) {
//         setErrAddress("Enter your address");
//       }
//       if (!image) {
//         setErrImage("Enter your image");
//       }
      
//       // ============== Getting the value ==============
//       if (
//         clientName &&
//         email &&
//         EmailValidation(email) &&
//         password &&
//         password.length >= 6 &&
//         phone &&
//         address &&
//         image
//     ) {
//       try {
//         const response = await axios.post("http://localhost/DRAW/connection/users/register.php", {
//             clientName,
//             email,
//             password,
//             phone,
//             address,
//             image,
//         }, { timeout: 5000 });
//           setSuccessMsg(response.data.message);
//           setClientName("");
//           setEmail("");
//           setPhone("");
//           setPassword("");
//           setAddress("");
//           setImage("");
//         } catch (error) {
//           console.error("Registration error:", error);
//         }
//       }
//     }
//   };
  
//   return (
//     <div className="w-full h-screen flex items-center justify-start">
//       <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
//         <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
//           <Link to="/">
//             <img src={logoLight} alt="logoImg" className="w-40" style={{marginLeft:'15%'}} />
//           </Link>
//           <div className="flex flex-col gap-1 -mt-1">
//             <h1 className="font-titleFont text-xl font-medium">
//               Get started for free
//             </h1>
//             <p className="text-base">Create your account to access more</p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//                 Get started fast with Magic Art
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
//               nisi dolor recusandae consectetur!
//             </p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//                 Access all Magic Art services
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
//               nisi dolor recusandae consectetur!
//             </p>
//           </div>
//           <div className="w-[300px] flex items-start gap-3">
//             <span className="text-green-500 mt-1">
//               <BsCheckCircleFill />
//             </span>
//             <p className="text-base text-gray-300">
//               <span className="text-white font-semibold font-titleFont">
//                 Trusted by online Shoppers
//               </span>
//               <br />
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
//               nisi dolor recusandae consectetur!
//             </p>
//           </div>
//           <div className="flex items-center justify-between mt-10">
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               © MagicArt
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Terms
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Privacy
//             </p>
//             <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
//               Security
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
//         {successMsg ? (
//           <div className="w-[500px]">
//             <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
//               {successMsg}
//             </p>
//             <Link to="/signin">
//               <button
//                 className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
//             tracking-wide hover:bg-black hover:text-white duration-300"
//               >
//                 Sign in
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <form className="w-full lgl:w-[500px] h-screen flex items-center justify-center" style={{color:'black'}}>
//             <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
//               <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
//                 Create your account
//               </h1>
//               <div className="flex flex-col gap-3">
//                 {/* client name */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Full Name
//                   </p>
//                   <input
//                     onChange={handleName}
//                     value={clientName}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="eg. Maryana mohammad"
//                   />
//                   {errClientName && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errClientName}
//                     </p>
//                   )}
//                 </div>
//                 {/* Email */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Your Email
//                   </p>
//                   <input
//                     onChange={handleEmail}
//                     value={email}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="email"
//                     placeholder="maryana@mar.com"
//                   />
//                   {errEmail && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errEmail}
//                     </p>
//                   )}
//                 </div>
//                 {/* Phone Number */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Phone Number
//                   </p>
//                   <input
//                     onChange={handlePhone}
//                     value={phone}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="0795053882"
//                   />
//                   {errPhone && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errPhone}
//                     </p>
//                   )}
//                 </div>
//                 {/* Password */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Password
//                   </p>
//                   <input
//                     onChange={handlePassword}
//                     value={password}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="password"
//                     placeholder="Create password"
//                   />
//                   {errPassword && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errPassword}
//                     </p>
//                   )}
//                 </div>
//                 {/* Address */}
//                 <div className="flex flex-col gap-.5">
//                   <p className="font-titleFont text-base font-semibold text-gray-600">
//                     Address
//                   </p>
//                   <input
//                     onChange={handleAddress}
//                     value={address}
//                     className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//                     type="text"
//                     placeholder="road-001, house-115, example area"
//                   />
//                   {errAddress && (
//                     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//                       <span className="font-bold italic mr-1">!</span>
//                       {errAddress}
//                     </p>
//                   )}
//                 </div>
//                 {/* Image */}
//                 <div className="flex flex-col gap-.5">
//   <p className="font-titleFont text-base font-semibold text-gray-600">
//     Image
//   </p>
//   <input
//     onChange={handleImage}
//     className="w-full h-8 px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
//     type="file"
//   />
//   {errImage && (
//     <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
//       <span className="font-bold italic mr-1">!</span>
//       {errImage}
//     </p>
//   )}
// </div>
                
                
//                 {/* Checkbox */}
//                 <div className="flex items-start mdl:items-center gap-2">
//                   <input
//                     onChange={() => setChecked(!checked)}
//                     className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
//                     type="checkbox"
//                   />
//                   <p className="text-sm text-primeColor">
//                     I agree to the Magic Art{" "}
//                     <span className="text-blue-500">Terms of Service </span>and{" "}
//                     <span className="text-blue-500">Privacy Policy</span>.
//                   </p>
//                 </div>
//                 <button
//                   onClick={handleSignUp}
//                   className={`${
//                     checked
//                       ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
//                       : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
//                   } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
//                 >
//                   Create Account
//                 </button>
//                 <p className="text-sm text-center font-titleFont font-medium">
//                   Don't have an Account?{" "}
//                   <Link to="/signin">
//                     <span className="hover:text-blue-600 duration-300">
//                       Sign in
//                     </span>
//                   </Link>
//                 </p>
//               </div>
//             </div>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };
  

// export default SignUp;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <section className="login pt-100" style={{color:'black'}}>
          <div className="container">
            <div className="billing-details">
              <h2 className="checkout-title text-uppercase text-center mb-30">Create Account</h2>
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
                  <Link to={`/signin`}>Log in </Link>
                 
                </div>
              </form>
            </div>
          </div>
        </section>
      );
};