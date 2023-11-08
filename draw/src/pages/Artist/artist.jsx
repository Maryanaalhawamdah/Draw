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
      <div className="w-full relative group flex flex-wrap">
      {items.map((item, index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={`/assets/${item.image}`} alt={item.name} className="artists"/>
            </div>
            <br/>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{item.fname} {item.lname} </h2>
                <p className="card-text">
                  Drawing is the embodiment of imaginary meanings and putting
                  them into reality. Drawing requires deep thinking, intense
                  concentration, and extreme ingenuity. So that the painter can
                  draw his idea perfectly.
                </p>
                <p className="card-text">
                  <small className="text-muted"></small>
                </p>
              </div>
            </div>
          </div>
          <br/>
          <Link to='/paints'><button className='show-btn'>Show Paints</button></Link>
          
           
        </div>
       
      ))}
    </div>
    
    );
  };
  
  export default Artist;
  