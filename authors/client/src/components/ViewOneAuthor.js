import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate, Link } from "react-router-dom";

const ViewOneAuthor = (props) => {
    const [authorList, setAuthorList] = useState([])
    const {id} = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then( res => {
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    const handleDelete = (authorID) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log("***delete successful***", res.data)
                const filteredAuthorsList = (author => {
                    return author._id != authorID});
                    setAuthorList(filteredAuthorsList)
                    navigate('/')
                })
            
    }


    return (
        <div className="mt-5 px-3 py-4">
            <h2 className="h1 display-2">Recipe Detail</h2>
            <p>Name:  {authorList.name}</p>
            <p>Description:  {authorList.description}</p>
            <p>Instructions:  {authorList.instructions}</p>
            <p>Cook Time:  {authorList.cookTime}</p>
            <Link to={`/`}><button className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2">Back to Recipes</button></Link>
            <button className="btn btn-danger btn-lg mx-3 px-5 py-3 mt-2" onClick={() => handleDelete(authorList._id)}> Delete </button>
        </div>
    );
}
export default ViewOneAuthor;
