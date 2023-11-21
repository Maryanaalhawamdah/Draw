import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import Sidebar from "../adminHome/ahome/Sidebar";
import Header from "../adminHome/header";

function Add() {
    const navigate = useNavigate();

    const initialFormState = {
        name: '',
        image: '',
        description: '',
        price: '',
        categories: ''
    };

    const [formData, setFormData] = useState(initialFormState);
    const [error, setError] = useState('');

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

    const submitData = async (e) => {
        e.preventDefault();
        const url = 'http://localhost/DRAW/connection/products/add.php';

        const data = new FormData();

        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const response = await axios.post(url, data);
            console.log("Response from PHP:", response.data);
            navigate('/apget');
            setFormData(initialFormState); // Clear the form
        } catch (error) {
            console.error("Error:", error);

            if (error.response) {
                setError(`Server Error: ${error.response.status}`);
            } else if (error.request) {
                setError("No response received from the server");
            } else {
                setError("An error occurred while submitting the form.");
            }
        }
    };

    return (
        <main className='main-container-fixed'>
            <Header/>
            <div className='sidebar'>
                <Sidebar />
            </div>
            <div id="editPmaindiv">
                <form id="form" onSubmit={submitData}>
                    <table className="table table-bordered" style={{ width: '70%', marginLeft: '170px' }}>
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
                                <td className="table-secondary"><input type="text" required name="name" value={formData.name} onChange={handleInputChange} /></td>
                                <td className="table-info"><input type="file" required name="image" onChange={handleInputChange} /></td>
                                <td className="table-success"><input type="text" required name="description" value={formData.description} onChange={handleInputChange} /></td>
                                <td className="table-danger"><input type="number" required name="price" value={formData.price} onChange={handleInputChange} /></td>
                                <td className="table-primary"><input type="text" required name="categories" value={formData.categories} onChange={handleInputChange} /></td>
                                <td className="table-light">
                                    <button type="submit" className="btn btn-info add-new">Add</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {error && <div className="alert alert-danger">{error}</div>}
                </form>
            </div>
        </main>
    );
}

export default Add;
