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
              <h2 className="card-title">{item.fname} {item.lname}</h2>
              <p className="card-text">Drawing requires deep thinking, intense concentration, and extreme ingenuity. So that the painter can draw his idea perfectly,Drawing is the embodiment of imaginary meanings and putting them into reality.</p>
             <Link to='/paints'><button className='show-btn'>show paints</button></Link>
             <Link to=''><button className='contact-btn'>Contact </button></Link>
             
            </div>
          </div>
        ))}
       
      </div>
    );
  };
  
  export default Artist;
  