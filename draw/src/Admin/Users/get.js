import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../adminHome/header";
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
function GetUser() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get('http://localhost/DRAW/connection/users/get.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  const sentid = (id) => {
    
    axios.post('http://localhost/DRAW/connection/users/getuser.php',  id )
      .then(response => {
        // Handle the response, e.g., redirect to the edit page
        console.log('this the php :'+response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

 

  return (
    <main className='main-container-fixed'>
      <Header/>
    <div className='sidebar'>
  <Sidebar />
</div>
    <div id="mainUdiv">
    
      <table className="table table-bordered" style={{width:'55%',marginLeft:'100px'}}>
        <thead>
        <tr class="table-dark">
            <th>Id</th>
            <th>clientName</th>            
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.map(item => (
            <tr key={item.id}>
              <td class="table-secondary">{item.id}</td>
              <td class="table-danger">{item.clientName}</td>
              <td class="table-success">{item.email}</td>
              <td class="table-info">{item.phone}</td>
              <td class="table-primary">{item.address}</td>
              <td class="table-success"><img src={item.image} alt={item.name} width={"70px"}/></td>
              <td class="table-light">
                <Link to={`/aduedit/${item.id}`}>
                  <button
                    type="button"
                    id="edit"
                    onClick={() => sentid(item.id)} // Call sentid with item.id
                    className="btn btn-info add-new"
                  >
                    <i className="fa fa-plus"></i> Edit
                  </button>
                </Link>
                <span> </span>
                <Link to={`/adudelate/${item.id}`}>
                  <button type="button" id="del" className="btn btn-info add-new">
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
                     <td colSpan="7" style={{ textAlign: 'right' }}> 
                     <Link to="/aduser"> <button class="btn btn-dark me-md-2" type="button" style={{ width: '200px' }}>
          <FaPlus />  Add New 
        </button></Link>
        </td>
        </tbody>
        
      </table>
      {/* <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        
      </div> */}
      {/* <Link to="/add"> <button type="button" className="btn btn-info add-new">
                                    <FaPlus />  <i className="fa fa-plus"></i> Add New
                                    </button></Link>  */}
    </div>
    </main>
  );
}

export default GetUser;
