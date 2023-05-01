import { useState, useEffect } from "react";

export function getData(id) {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(`http://localhost:4001/api/user/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
            
    },[])

    return data
}