import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
// import { FaPlus } from "react-icons/fa";
// import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
import Header from "../adminHome/header";

function Edit() {

    const {id}  = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({});

   

    useEffect(() => {
        axios.get('http://localhost/DRAW/connection/admin/get.php')
            .then(response => {
                console.log(response); 
                setData(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);


    const [inputs , setInputs ] = useState({});

        const changed = (e) =>{
        const name  = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values , [name]: value}));
    }

    const submit = (e) =>{
        e.preventDefault();

       const url = `http://localhost/DRAW/connection/admin/edit.php?id=${id}`;
        axios.post(url, inputs)
            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/aadmin');
            })
            .catch(error => {
                console.error("Error:", error);
            });


            console.log(inputs);
            
    }

   
   
   // ...
return (
    <main className='main-container-fixed'>
      <Header/>
    <div className='sidebar'>
  <Sidebar />
</div>
    <div id="addAdmin">
        <form id="form" onSubmit={submit}>
            <table className="table table-bordered" style={{width:'70%',marginLeft:'150px'}}>
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

                
                    
                    <tr>
                        <td class="table-secondary"><input type="text" value="" name="id" onChange={changed} /></td>
                        <td class="table-danger"><input type="text" required placeholder="" name={data.fname} onChange={changed} /></td>
                        <td class="table-success"><input type="text" required placeholder="" name={data.lname} onChange={changed} /></td>
                        <td class="table-danger"><input type="text" required placeholder="" name={data.email} onChange={changed} /></td>
                        <td class="table-primary"><input type="text" required placeholder="" name={data.address} onChange={changed} /></td>
                        <td class="table-info"><input type="text" required placeholder="" name={data.phone} onChange={changed} /></td>


                        <td class="table-light">
                            <button type="submit" className="btn btn-info add-new">Save</button>
                        </td>
                    </tr>
              
                </tbody>
            </table>
        </form>
    </div>
    </main>
);
// ...

}

export default Edit ;
