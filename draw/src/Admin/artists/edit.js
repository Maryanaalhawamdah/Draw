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
        axios.get('http://localhost/DRAW/connection/artists/get.php')
            .then(response => {
                console.log(response); 
                setData(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    const [inputs , setInputs ] = useState({});

        const changed = (e) =>{
        const name  = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values , [name]: value}));
    }

    const submit = (e) =>{
        e.preventDefault();

       const url = `http://localhost/DRAW/connection/artists/edit.php?id=${id}`;
        axios.post(url, inputs)
            .then(response => {
                console.log("Response from PHP:", response.data);

                navigate('/users');
            })
            .catch(error => {
                console.error("Error:", error);
            });


            console.log(inputs);
            
    }

   
   
   // ...
return (
    <div id="editUmaindiv">
        <form id="form" onSubmit={submit}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                
                    
                    <tr>
                        <td><input type="text" value={data.id} name="id" onChange={changed} /></td>
                        <td><input type="text" required placeholder={data.fname} name="fname" onChange={changed} /></td>
                        <td><input type="text" required placeholder={data.lname} name="lname" onChange={changed} /></td>
                        <td><input type="text" required placeholder={data.email} name="email" onChange={changed} /></td>
                        <td>
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
