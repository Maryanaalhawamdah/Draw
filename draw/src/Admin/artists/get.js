import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
    <div id="mainUdiv">
    
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>
                <Link to={`/edit/${item.id}`}>
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
                <Link to={`/delete/${item.id}`}>
                  <button type="button" id="del" className="btn btn-info add-new">
                    Delete
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <Link to="/add"> <button type="button" className="btn btn-info add-new">
                                    <FaPlus />  <i className="fa fa-plus"></i> Add New
                                    </button></Link> 
    </div>
  );
}

export default GetUser;
