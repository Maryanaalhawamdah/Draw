import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../adminHome/header";

function Delete() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = 'http://localhost/DRAW/connection/category/delete.php';

        // Send the ID in the request body
        axios.delete(url, { data: { id: id } })
            .then(response => {
                console.log("Category deleted:", response.data);
                navigate('/acategory');
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [id, navigate]);

    return (
        <div>
            <Header/>
            Deleting completely...
        </div>
    );
}

export default Delete;
