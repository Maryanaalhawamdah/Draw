import React, { useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Delete() {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost/DRAW/connection/category/delete.php?id=${id}`;

        axios.delete(url)
            .then(response => {
                console.log("User deleted:", response.data);


                navigate('/categories');
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, [id, navigate]);

    return (
        <div>
            
        </div>
    );
}

export default Delete;
