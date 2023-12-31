import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import {  Link } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
import Header from "../adminHome/header";


function GetProduct() {


  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost/DRAW/connection/products/get.php')
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
    <div id="mainPdiv">
      
      <table className="table table-bordered" style={{width:'70%',marginLeft:'20px'}}>
        <thead>
          <tr class="table-dark">
            <th>Id</th>
            <th>Name </th>
            <th>Image</th>
            <th>Details	</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>

              <td class="table-secondary">{item.id}</td>
              <td class="table-danger">{item.name}</td>
              <td class="table-success"> <img src={item.image} alt={item.name} width={"70px"}/></td>
              <td class="table-info">{item.description}</td>
              <td class="table-primary">{item.price}</td>
              
              <td class="table-light">
                <Link to={`/apedit/${item.id}`}>
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
                <Link to={`/apdelete/${item.id}`}>
                  <button type="button" id="del" className="btn btn-info add-new">
                    Delete
                  </button>
                </Link>
              </td>


            </tr>
          ))}
           <td colSpan="6" style={{ textAlign: 'right' }}> 
           <Link to="/aadd">
    <button
      className="btn btn-dark me-md-2"
      type="button"
      style={{ width: '200px' }} // Adjust the width as needed
    >
      <FaPlus /> <i className="fa fa-plus"></i> Add New
    </button>
  </Link>
        </td>
        </tbody>
        
      </table>
      {/* <div className="d-grid gap-2 d-md-flex justify-content-md-end">

</div> */}

       
      {/* <Link to="/addProdcut"> <button type="button" className="btn btn-info add-new">
                                    <FaPlus />  <i className="fa fa-plus"></i> Add New
                                    </button></Link>  */}
    </div>
    </main>
  );
}

export default GetProduct;

