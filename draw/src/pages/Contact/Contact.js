import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
const Contact = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const [clientName, setclientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  // ========== Error Messages Start here ============
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessages, setErrMessages] = useState("");
  // ========== Error Messages End here ==============
  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setclientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages("");
  };

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handlePost = async (e) => {
    e.preventDefault();
    setErrClientName("");
    setErrEmail("");
    setErrMessages("");
    if (!clientName) {
      setErrClientName("Enter your Name");
    }
    if (!email) {
      setErrEmail("Enter your Email");
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid Email");
      }
    }
    if (!messages) {
      setErrMessages("Enter your Messages");
    }
    if (clientName && email && EmailValidation(email) && messages) {
      try {
        const response = await axios.post('http://localhost/DRAW/connection/messages/add.php', {
          clientName,
          email,
          messages,
        });
        if (response.status === 201) {
          setSuccessMsg(`Thank you, ${clientName}! Your message has been received.`);
          // Clear input fields after successful submission if needed
          setclientName("");
          setEmail("");
          setMessages("");
        } else {
          // Handle server errors
          console.error('Server error:', response.statusText);
        setSuccessMsg(`Thank you, ${clientName}! Your message has been received..`);
      
        }
      } catch (error) {
        console.error('Network error:', error);
        setSuccessMsg("Error submitting your message. Please try again.");
      }
    }
  };
  

  return (
    <div className="max-w-container mx-auto px-4" style={{color:'black'}}>
    <Breadcrumbs title="Contact" prevLocation={prevLocation} />
    {successMsg ? (
      <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
    ) : (
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <img src="/assets/images/logo.png" alt="logo" style={{width:'55%'}}/>
        </div>
        <div className="w-1/2">
          <form className="pb-20">
            <h1 className="font-titleFont font-semibold text-3xl" style={{color:'black'}}>
              Fill up a Form
            </h1>
            <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Name
                </p>
                <input
                  onChange={handleName}
                  value={clientName}
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  type="text"
                  placeholder="Enter your name here"
                />
                {errClientName && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errClientName}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Email
                </p>
                <input
                  onChange={handleEmail}
                  value={email}
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  type="email"
                  placeholder="Enter your name here"
                />
                {errEmail && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errEmail}
                  </p>
                )}
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Messages
                </p>
                <textarea
                  onChange={handleMessages}
                  value={messages}
                  cols="30"
                  rows="3"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                  type="text"
                  placeholder="Enter your name here"
                ></textarea>
                {errMessages && (
                  <p className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1">
                    <span className="text-sm italic font-bold">!</span>
                    {errMessages}
                  </p>
                )}
              </div>
              <button
                onClick={handlePost}
                className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
  
    
    
  );
};

export default Contact;
