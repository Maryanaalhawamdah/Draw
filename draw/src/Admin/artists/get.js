import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../adminHome/header";

import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
function GetUser() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get('http://localhost/DRAW/connection/artists/get.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  const sentid = (id) => {
    
    axios.post('http://localhost/DRAW/connection/artists/get.php',  id )
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
    
      <table className="table table-bordered" style={{width:'50%',marginLeft:'130px'}}>
        <thead>
          <tr class="table-dark">
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Image</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td class="table-secondary">{item.id}</td>
              <td class="table-primary">{item.fname}</td>
              <td class="table-danger">{item.lname}</td>
              <td class="table-info"><img src={item.image} alt={item.name} width={"70px"}/></td>
              <td class="table-warning">{item.phone}</td>
              <td class="table-light">
                <Link to={`/aarteedit/${item.id}`}>
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
                <Link to={`/aartedelete/${item.id}`}>
                  <button type="button" id="del" className="btn btn-info add-new">
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
           <td colSpan="6" style={{ textAlign: 'right' }}> 
           <Link to="/aarteadd"> <button class="btn btn-dark me-md-2" type="button"  style={{ width: '200px' }}>
          <FaPlus />  <i className="fa fa-plus"></i> Add New
        </button></Link>
           </td>
        </tbody>
        
      </table>
      {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
       
      </div> */}
      {/* <Link to="/aarteadd"> <button type="button" className="btn btn-info add-new">
                                    <FaPlus />  <i className="fa fa-plus"></i> Add New
                                    </button></Link>  */}
    </div>
    </main>
  );
}

export default GetUser;
