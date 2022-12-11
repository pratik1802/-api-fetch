import React from "react";
import { useEffect, useState } from "react";

const Api = () => {
    const [data, setData] = useState([]);
    const getData = async () => {

        const Response = await fetch('https://jsonplaceholder.typicode.com/users');
        const mainData = await Response.json();
        // console.log(mainData);
        setData(mainData);
    }
    useEffect(() => {
        getData();
        
    }, []);






    return (
        <>
            <h1 className="text-center my-4"> Fake Api data</h1>
            <table className="table">

                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Address</th>

                {
                    data.map((cval) => {
                        return (
                        
                        
                        
                        
                        <tr>
                            <td>{cval.id}</td>
                            <td>{cval.name}</td>
                            <td>{cval.Username}</td>
                            <td>{cval.email}</td>
                            <td>{cval.address.street},{cval.address.city}</td>
                        </tr>

                        )
                    })
                }
            </table>
        </>
    );
}
export default Api;
