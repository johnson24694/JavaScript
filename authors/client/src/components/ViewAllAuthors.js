import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';


const ViewAllAuthors= (props) => {
    const [authorList, setAuthorList] = useState([])
    const {id} = useParams();
    

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
        .then(res => {
            console.log(res);
            setAuthorList(res.data)
        })},[]
    )

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log("***delete successful***", res.data)
                const filteredAuthorsList = authorList.filter(author => {
                    return author._id != id});
                    setAuthorList(filteredAuthorsList)
                });
            
    }
  


    return (
        <div className="mt-2 px-3 py-4">
            <h1 className="h1 display-2">Favorite Authors</h1>
            <p><Link to={`/authors/new`}> Add an Author </Link></p>
            <p className="fw-bolder">We have quotes by:</p>
            <table className = "table table-striped table-hover border mt-2 px-4 py-4">
                <thead>
              


                    <tr className="h1 display-6">
                        <th>Author</th>
                        <th>Actions Available</th>
                        
                    </tr>
                    
                </thead>
                <tbody>
                    {
                    authorList.map((authorList, index)=>{
                    return (
                        <tr className="table-danger" key={index}>
                            <td>{authorList.name}</td> 
                        
                            <td><button className="btn btn-secondary text-decoration-none"><Link className="text-decoration-none text-white" to={`/author/${authorList._id}/edit`}> Edit </Link></button></td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(authorList._id)}> Delete </button></td>
                        </tr>
                         )})   
                    }    
                        
                </tbody>
            </table>
        </div>

    )
}




export default ViewAllAuthors;