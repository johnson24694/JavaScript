import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const CreateForm= (props) => {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState(""); 
    const [instructions, setInstructions] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {
            name,
            description,
            instructions,
            cookTime
        })
            .then(res=>{
                console.log(res);
                navigate('/')
            })
            .catch((err)=> {
            console.log(err.response.data.err.errors)
            setErrors(err.response.data.err.errors)
        });
    }
    
    return (
        <form className="mt-2 px-3 py-4" onSubmit={onSubmitHandler}>
            <h1 className="h1 display-2">Favorite Authors</h1>
            <p><Link to={`/`}> Home </Link></p>
            <p className="fw-bolder">Add a new author:</p>
            <div className="border border-dark">
            <p className="p-3">
                <label className="fw-bolder">Name:</label><br/>
                <input type="text" name="name" placeholder="Name goes here" value={name} onChange = {(e)=>setName(e.target.value)}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
            </p>
            
            <input className="btn btn-primary btn-md mx-3 px-5 py-3 mt-2 mb-4" type="submit"/>
            <Link to={`/`}><button className="btn btn-danger btn-md mx-3 px-5 py-3 mt-2 mb-4 ">Cancel</button></Link>
            </div>
        </form>
        
    )
}
export default CreateForm;