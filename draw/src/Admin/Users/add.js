import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaPlus } from "react-icons/fa";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
import Header from "../adminHome/header";




function Add() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});

    const changed = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ ...values, [name]: value }));

    }

    const submitData = (e) => {
        e.preventDefault();

        console.log("Form Data:", inputs);

        const url = 'http://localhost/DRAW/connection/users/add.php';

        axios.post(url, inputs)


            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/auget');
                console.log(inputs)
            })
            .catch(error => {
                console.error("Error:", error);
            });

        // console.log("Request Data:", inputs);

    }

    return (
        <main className='main-container-fixed'>
      <Header/>
        <div className='sidebar'style={{width:'10%'}}>
      <Sidebar />
    </div>
        <div id="editUmaindiv">
            <form id="form" onSubmit={submitData}>
                <table className="table table-bordered" style={{width:'60%',marginLeft:'130px'}}>
                    <thead>
                        <tr class="table-dark">

                            <th>User Name</th>
                            
                            <th>Email</th>
                            <th>Password</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Image</th>
                            <th >Action</th>
                        </tr>
                    </thead>

                    <tbody>



                        <tr>

                            <td class="table-secondary"><input type="text" required name="clientName" onChange={changed} /></td>
                            <td class="table-success"><input type="text" required name="email" onChange={changed} /></td>
                            <td class="table-danger"><input type="text" required name="password" onChange={changed} /></td>
                            <td class="table-info"><input type="text" required name="phone" onChange={changed} /></td>
                            <td class="table-primary"><input type="text" required name="address" onChange={changed} /></td>
                            <td className="table-info"><input type="file" required name="image" onChange={changed} /></td>
                            <td class="table-light">
                                <button type="submit" className="btn btn-info add-new">Add</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </div>
        </main>
    );
}

export default Add;
