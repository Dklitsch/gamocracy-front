import React, { useState, useEffect } from 'react';

const useGet = (endpoint, body) => {

    const [result, setResult] = useState(null);

    useEffect(() => { 
        async function fetchData() {
            const response = await fetch(process.env.REACT_APP_API_ADDRESS + endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: body
            }) 
            setResult(await response.json());
        }
        if (body != null)
        {
            fetchData();
        }
    }, [body]);

    return result;
};

export default useGet;