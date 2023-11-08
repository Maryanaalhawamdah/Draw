import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';

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
    <div id="maiCndiv">
      <table className="table table-bordered">
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
                  <Link to={`/edit/category/${item.id}`}>
                    <button type="button" id="edit" className="btn btn-info add-new"
                  >
                    <i className="fa fa-plus"></i> Edit
                  </button>
                  </Link>
                  <Link to={`/delete/category/${item.id}`}>
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
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link to="/add/category"> <button class="btn btn-dark me-md-2" type="button">
          <FaPlus />  <i className="fa fa-plus"></i> Add New
        </button></Link>
      </div>
      {/* <Link to="/add/category">
        <button type="button" className="btn btn-info add-new">
          Add New
        </button>
      </Link> */}
    </div>
  );
}

export default GetCategories;
