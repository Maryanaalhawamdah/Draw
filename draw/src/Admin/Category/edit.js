import React, { useState, useEffect } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
// import { FaPlus } from "react-icons/fa";
// import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';


function Edit() {

    const {id}  = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({});

   

    useEffect(() => {
        axios.get(`http://localhost/DRAW/connection/category/get.php?id=${id}`)
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

       const url = `http://localhost/DRAW/connection/category/edit.php?id=${id}`;
        axios.post(url, inputs)
            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/categories');
            })
            .catch(error => {
                console.error("Error:", error);
            });


            console.log(inputs);
            
    }

   
   
   // ...
return (
    <div id="editmaindiv">
        <form id="form" onSubmit={submit}>
            <table className="table table-bordered">
                <thead>
                    <tr  class="table-dark">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                
                    
                    <tr>
                        <td class="table-secondary"><input type="text" value="" name="id" onChange={changed} /></td>
                        <td class="table-danger"><input type="text" required placeholder={data.name} name="name" onChange={changed} /></td>
                        <td class="table-light">
                            <button type="submit" className="btn btn-info add-new">Save</button>
                        </td>
                    </tr>
              
                </tbody>
            </table>
        </form>
    </div>
);
// ...

}

export default Edit ;
