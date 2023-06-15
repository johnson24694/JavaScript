import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const RecipeForm= (props) => {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState(""); 
    const [instructions, setInstructions] = useState("");
    const [cookTime, setCookTime] = useState("");
    const [errors, setErrors] = useState("");

    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/recipe', {
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
        <form onSubmit={onSubmitHandler}>
            <h2>Recipe Manager</h2>
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
            <input type="submit"/>
        </form>
    )
}
export default RecipeForm;
