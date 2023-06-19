import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const CreateForm= (props) => {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(""); 
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/notes', {
            title,
            description,
            
        })
            .then(res=>{
                console.log(res);
                navigate('/')
            })
            .catch((err)=> {
            console.log(err)
            console.log(err.response.data.err.errors)
            setErrors(err.response.data.err.errors)
        });
    }
    
    return (
        <form className="mt-5 px-4 py-4" onSubmit={onSubmitHandler}>
            <h2 className="h1 display-2">Write Notes</h2>
            <p className="fs-5 text">Write a new note!</p>
                <div className=" mt-4 py-4 border border-2 dark">
                    <p>
                        <label className="fw-medium">Note Title:</label><br/>
                        <input type="text" name="title" placeholder="Title goes here" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                        {errors.title ? <p>{errors.title.message}</p> : null}
                    </p>
                    <p>
                        <label className="fw-medium">Note Body:</label><br/>
                        <input type="textarea" name="description" placeholder="Body goes here" value={description}  onChange = {(e)=>setDescription(e.target.value)}/>
                        {errors.description ? <p>{errors.description.message}</p> : null}
                    </p>
                    <input className="btn btn-success btn-md mx-3 px-5 py-3 mt-4" type="submit" value="Write this Note!"/>
                    <Link to={`/`}><button className="btn btn-secondary btn-md mx-3 px-5 py-3 mt-4">Go Back Home</button></Link>
                </div>
        </form>
        
    )
}
export default CreateForm;
