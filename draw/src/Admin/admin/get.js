import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import {  Link } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
import Header from "../adminHome/header";

function GetAdmins() {
  const [data, setData] = useState([]);
  // const urll = 'http://localhost/admintest/connection/users/getuser.php';
  // Define the sentid function


  useEffect(() => {
    axios.get('http://localhost/DRAW/connection/admin/get.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  const sentid = (id) => {

    axios.post('http://localhost/admintest/connection/users/getuser.php', id)
      .then(response => {
        // Handle the response, e.g., redirect to the edit page
        console.log('this the php :' + response.data);
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

    <div id="maindiv">

      <table className="table table-bordered" style={{width:'60%',marginLeft:'100px'}}>
        <thead>
          <tr class="table-dark">
            <th>Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td class="table-secondary">{item.id}</td>
              <td class="table-danger">{item.fname}</td>
              <td class="table-success">{item.lname}</td>
              <td class="table-danger">{item.email}</td>
              <td class="table-info">{item.address}</td>
              <td class="table-primary">{item.phone}</td>
              <td class="table-light">
                <Link to={`/edit/admin/${item.id}`}>
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
                <Link to={`/delete/admin/${item.id}`}>
                  <button type="button" id="del" className="btn btn-info add-new">
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
          <td colSpan="7" style={{ textAlign: 'right' }}>
          <Link to="/aaadd"> <button class="btn btn-dark me-md-2" type="button"  style={{ width: '200px' }}>
          <FaPlus />  <i className="fa fa-plus"></i> Add New
        </button></Link>
          </td>
        </tbody>

      </table>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
       
      </div>

    </div>
    </main>
  );
}

export default GetAdmins;
