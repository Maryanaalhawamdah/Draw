import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from "../adminHome/ahome/Sidebar";
import Header from "../adminHome/header";



function GetOrders() {


  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost/DRAW/connection/messages/get.php')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);



  const sentid = (id) => {
    
    axios.post('http://localhost/DRAW/connection/messages/get.php',  id )
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
      
      <table class="table table-bordered" style={{width:'50%',marginLeft:'220px'}}>
        <thead>
          <tr class="table-dark">
            <th>Id</th>
            <th>Client Name</th>
            <th>Email</th>
            <th>Messages</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>

              <td class="table-secondary">{item.id}</td>
              <td class="table-Success">{item.clientName}</td>
              <td class="table-Warning">{item.email}</td>
              <td class="table-Primary">{item.messages}</td>
                           
              
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
    </main>
  );
}

export default GetOrders;

