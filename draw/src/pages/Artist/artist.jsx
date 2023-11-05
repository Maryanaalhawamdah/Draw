import React, { useState, useEffect } from "react";
import axios from "axios";
import {  Link } from 'react-router-dom';
import './artist.css';


const Artist = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
      axios.get("http://localhost/DRAW/connection/artists/get.php")
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, []);
  
    return (
      <div>
       
        {items.map((item, index) => (
          <div key={index} className="card text-center">
            <div className="card-header">
              <img src={item.image} alt="artist" />
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.fname} {item.lname}</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
             <Link to=''><button className='show-btn'>show paints</button></Link>
             <Link to='/Contact/Contact.js'><button className='contact-btn'>Contact </button></Link>
             
            </div>
          </div>
        ))}
       
      </div>
    );
  };
  
  export default Artist;
  