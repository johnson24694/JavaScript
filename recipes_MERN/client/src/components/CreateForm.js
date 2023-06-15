import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CreateForm= (props) => {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState(""); 
    const [instructions, setInstructions] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recipes', {
            name,
            description,
            instructions,
            cookTime
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                navigate('/')
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form className="mt-5 px-3 py-4" onSubmit={onSubmitHandler}>
            <h2 className="h1 display-1">Recipe Manager</h2>
            <p>
                <label>Name</label><br/>
                <input type="text" name="name" placeholder="Name goes here" value={name} onChange = {(e)=>setName(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" name="description" placeholder="Description goes here" value={description}  onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <p>
                <label>Instructions</label><br/>
                <input type="text"  name="instructions" placeholder="Instructions go here" value={instructions}  onChange = {(e)=>setInstructions(e.target.value)}/>
            </p>
            <p>
                <label>Cook Time</label><br/>
                <input type="number" name="cookTime" placeholder="Cook time goes here" value={cookTime} onChange = {(e)=>setCookTime(e.target.value)}/>
            </p>
            <input className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2" type="submit"/>
        </form>
    )
}
export default CreateForm;
