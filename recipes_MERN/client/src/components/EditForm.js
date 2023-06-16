import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const EditForm= (props) => {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState(""); 
    const [instructions, setInstructions] = useState("");
    const [cookTime, setCookTime] = useState("");
    const {id} = useParams();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipe/' + id)
            .then(res => {
                setName(res.data.name);
                setDescription(res.data.description);
                setInstructions(res.data.instructions);
                setCookTime(res.data.cookTime);
                      
            })
                 
            .catch(err => console.log(err))
                  
            
    }, [])

    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/recipe/${id}`, {
            name,
            description,
            instructions,
            cookTime
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
        <form className="mt-5 px-3 py-4" onSubmit={onSubmitHandler}>
            <h2 className="h1 display-1">Edit Recipe</h2>
            <p>
                <label>Name</label><br/>
                <input type="text" name="name" placeholder="Name goes here" value={name} onChange = {(e)=>setName(e.target.value)}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" name="description" placeholder="Description goes here" value={description}  onChange = {(e)=>setDescription(e.target.value)}/>
                {errors.description ? <p>{errors.description.message}</p> : null}
            </p>
            <p>
                <label>Instructions</label><br/>
                <input type="text"  name="instructions" placeholder="Instructions go here" value={instructions}  onChange = {(e)=>setInstructions(e.target.value)}/>
                {errors.instructions ? <p>{errors.instructions.message}</p> : null}
            </p>
            <p>
                <label>Cook Time</label><br/>
                <input type="number" name="cookTime" placeholder="Cook time goes here" value={cookTime} onChange = {(e)=>setCookTime(e.target.value)}/>
                {errors.cookTime ? <p>{errors.cookTime.message}</p> : null}
            </p>
            <input className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2" type="submit"/>
            <Link to={`/`}><button className="btn btn-danger btn-lg mx-3 px-5 py-3 mt-2">Cancel</button></Link>
                      
        </form>
    )
}
export default EditForm;
