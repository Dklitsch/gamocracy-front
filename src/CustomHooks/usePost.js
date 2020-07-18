import React, { useState, useEffect } from 'react';
import apiResponse from './ApiResponse';

const usePost = (endpoint, body) => {

    const [result, setResult] = useState(apiResponse(null));

    useEffect(() => { 
        async function fetchData() {
            const response = await fetch(process.env.REACT_APP_API_ADDRESS + endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization' : `Bearer ${localStorage.getItem('id_token')}`
                },
                body: body
            }) 
            setResult({ status : response.status, body : await response.json()});
        }
        if (body != null)
        {
            fetchData();
        }
    }, [body]);

    return result;
};

export default usePost;