import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../adminHome/header";

import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
function GetCategories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/DRAW/connection/category/get.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <main className='main-container-fixed'>
      <Header/>
    <div className='sidebar'>
  <Sidebar />
</div>
    <div id="maiCndiv">
      <table className="table table-bordered" style={{width:'30%',marginLeft:'80px'}}>
        <thead>
          <tr class="table-dark">
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(item => (
              <tr key={item.id}>
                <td class="table-secondary">{item.id}</td>
                <td class="table-danger">{item.name}</td>
                <td class="table-light">
                  <Link to="/acatedit">
                    <button type="button" id="edit" className="btn btn-info add-new"
                  >
                    <i className="fa fa-plus"></i> Edit
                  </button>
                  </Link>
                  <Link to="/acatdel">
                  <button type="button" id="del" className="btn btn-info add-new">
                    Delete
                  </button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No categories available.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center">
        <Link to="/acatadd"> <button class="btn btn-dark me-md-2" type="button"  style={{ width: '200px' }}>
          <FaPlus />   Add New
        </button></Link>
      </div>
      {/* <Link to="/add/category">
        <button type="button" className="btn btn-info add-new">
          Add New
        </button>
      </Link> */}
    </div>
    </main>
  );
}

export default GetCategories;
