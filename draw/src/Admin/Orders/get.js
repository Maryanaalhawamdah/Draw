import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';




function GetOrders() {


  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost/DRAW/connection/orders/orders.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);



  const sentid = (id) => {
    
    axios.post('http://localhost/Art-Magic/connection/orders/orders.php',  id )
      .then(response => {
        // Handle the response, e.g., redirect to the edit page
        console.log('this the php :'+response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  
  return (
    <div id="mainOdiv">
      
      <table className="table table-bordered">
        <thead>
          <tr class="table-dark">
            <th>Id</th>
            <th>User id </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Total products</th>
            <th>Total price</th>
            <th>Payment status</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>

              <td>{item.id}</td>
              <td>{item.user_id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.total_products}</td>
              <td>{item.total_price}</td>
              <td>{item.payment_status}</td>
              <td>{item.address}</td>
              
              
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}

export default GetOrders;

