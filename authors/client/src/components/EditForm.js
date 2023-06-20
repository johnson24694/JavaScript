import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const EditForm= (props) => {
    
    const [name, setName] = useState("");
    const {id} = useParams();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
            .catch(err => console.log(err))
    }, [])

    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, {
            name,
        })
            .then((res)=>{
                console.log(res);
                navigate("/")
            })
            .catch((err)=> {
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            });
    }
    
    return (
        <form className="mt-2 px-3 py-4" onSubmit={onSubmitHandler}>
            <h2 className="h1 display-2">Edit Author</h2>
            <p><Link to={`/`}> Home </Link></p>
            <p className="fw-bolder">Edit this Author:</p>
            <div className='border border-dark'>
            <p className="p-3">
                <label className="fw-bolder">Name:</label><br/>
                <input type="text" name="name" placeholder="Name goes here" value={name} onChange = {(e)=>setName(e.target.value)}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
            </p>
            <input className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2 p-3 mb-4" type="submit"/>
            <Link to={`/`}><button className="btn btn-danger btn-lg mx-3 px-5 py-3 mt-2 mb-4">Cancel</button></Link>
            </div>
        </form>
    )
}
export default EditForm;
