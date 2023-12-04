import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from "../adminHome/ahome/Sidebar";
import Header from "../adminHome/header";



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
    <main className='main-container-fixed'>
      <Header/>
    <div className='sidebar'>
  <Sidebar />
</div>
    <div id="mainOdiv">
      
      <table className="table table-bordered" style={{width:'55%',marginLeft:'100px'}}>
        <thead>
          <tr class="table-dark">
            <th>Id</th>
            <th>User id </th>
            <th>Name</th>            
            <th>Total products</th>
            <th>Order date</th>
            <th>Total price</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>

              <td className="table-secondary">{item.id}</td>
              <td className="table-Primary">{item.customer_id}</td>
              <td className="table-Success">{item.clientName}</td>
              <td className="table-Danger">{item.Qty}</td>
              <td className="table-Warning">{item.order_date}</td>
              <td className="table-Info">{item.total_price}</td>
              <td className="table-secondary">{item.address}</td>
              
              
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
    </main>
  );
}

export default GetOrders;

