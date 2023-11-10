import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
function Add() {
    const navigate = useNavigate();

    const initialFormState = {
        name: '',
        image: '',
        description: '',
        price: '',
        categorie: ''
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === "image") {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const submitData = (e) => {
        e.preventDefault();
        const url = 'http://localhost/DRAW/connection/products/add.php';

        const data = new FormData();

        for (const key in formData) {
            data.append(key, formData[key]);
        }

        axios.post(url, data)
            .then(response => {
                console.log("Response from PHP:", response.data);
                navigate('/products');
                setFormData(initialFormState); // Clear the form
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    return (
        <main className='main-container'>
      
        <div className='sidebar'>
      <Sidebar />
    </div>
        <div id="editPmaindiv">
            <form id="form" onSubmit={submitData}>
                <table className="table table-bordered" style={{width:'90%',marginLeft:'150px'}}>
                    <thead>
                        <tr class="table-dark">
                            <th>Name</th>
                            <th>Price</th>
                            <th>Details</th>
                            <th>Image</th>
                            <th>Categorie</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td class="table-secondary"><input type="text" required name="name" value={formData.name} onChange={handleInputChange} /></td>
                            <td class="table-danger"><input type="text" required name="price" value={formData.price} onChange={handleInputChange} /></td>
                            <td class="table-success"><input type="text" required name="details" value={formData.details} onChange={handleInputChange} /></td>
                            <td class="table-info"><input type="file" required name="photo" onChange={handleInputChange} /></td>
                            <td class="table-primary"><input type="text" required name="categorie" value={formData.categorie} onChange={handleInputChange} /></td>
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
