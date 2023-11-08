import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
// import { FaPlus } from "react-icons/fa";
// import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';





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

        const url = 'http://localhost/DRAW/connection/admin/add.php';

        axios.post(url, inputs)


            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/admins');


                console.log(inputs)
            })
            .catch(error => {
                console.error("Error:", error);
            });

        // console.log("Request Data:", inputs);

    }

    return (
        <div id="addAdmin">
            <form id="form" onSubmit={submitData}>
                <table className="table table-bordered">
                    <thead>
                        <tr class="table-dark">

                            <th>Fname</th>
                            <th>Lname</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th >Action</th>
                        </tr>
                    </thead>

                    <tbody>



                        <tr>

                            <td class="table-secondary"><input type="text" required name="fname" onChange={changed} /></td>
                            <td class="table-danger"><input type="text" required name="lname" onChange={changed} /></td>
                            <td class="table-success"><input type="text" required name="email" onChange={changed} /></td>
                            <td class="table-danger"><input type="text" required name="password" onChange={changed} /></td>
                            <td class="table-info"><input type="text" required name="phone" onChange={changed} /></td>
                            <td  class="table-primary"><input type="text" required name="address" onChange={changed} /></td>
                            <td class="table-dark">
                                <button type="submit" className="btn btn-info add-new">Add</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default Add;
