import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
import Header from "../adminHome/header";

function Add() {
    const navigate = useNavigate();

   

    const [inputs, setInputs] = useState({
        name: '',
        image: null,
        description: '',
        price: 0,
        categories: ''
    });
   
    const changed = (e) => {
        const { name, value, type, files } = e.target;
        const inputValue = type === 'file' ? files[0] : value;

        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: inputValue
        }));
    }
   

    const submitData = (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in inputs) {
        formData.append(key, inputs[key]);
    }

    console.log("Form Data:", inputs);
        const url = 'http://localhost/DRAW/connection/products/add.php';

        axios.post(url, inputs)

        .then(response => {
            console.log("Response from PHP:", response.data);
            navigate('/apget');


            console.log(inputs)
        })
        .catch(error => {
            console.error("Error:", error);
        });

    // console.log("Request Data:", inputs);

};
       
    

    return (
        <main className='main-container-fixed'>
            <Header/>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div id="editPmaindiv">
                <form id="form" onSubmit={submitData}>
                    <table className="table table-bordered" style={{ width: '70%', marginLeft: '190px' }}>
                        <thead>
                            <tr className="table-dark">
                                <th>Name</th>
                                <th>Image</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Categorie</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-secondary"><input type="text" required name="name"  onChange={changed} /></td>
                                <td className="table-info"><input type="file" required name="image" onChange={changed} /></td>
                                <td className="table-success"><input type="text" required name="description" onChange={changed} /></td>
                                <td className="table-danger"><input type="number" required name="price"  onChange={changed} /></td>
                                <td className="table-primary"><input type="text" required name="categories"  onChange={changed} /></td>
                                <td className="table-light">
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
