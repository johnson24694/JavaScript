import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';



const ViewAllRecipes = (props) => {
    const [recipeList, setRecipeList] = useState([])
    const {id} = useParams();

    useEffect( () => {
        axios.get('http://localhost:8000/api/recipes')
        .then(res => {
            console.log(res);
            setRecipeList(res.data)
        })},[]
    )

    const handleDelete = (recipeID) => {
        axios.delete(`http://localhost:8000/api/recipe/${id}`)
            .then(res => {
                console.log("***delete successful***", res.data)
                const filteredRecipesList = recipeList.filter(recipe => {
                    return recipe._id != recipeID});
                    setRecipeList(filteredRecipesList)
                })
            
    }


    return (
        <div className="mt-5 px-4 py-4">
            <h1 className="h1 display-2">Welcome to Recipe Manager!</h1>
            <table className = "table table-striped table-hover border mt-5 px-4 py-4">
                <thead>
                    <tr className="h1 display-6">
                        <th>Recipe Name</th>
                        <th>Cook Time (Minutes)</th>
                        <th>Instructions</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                    recipeList.map((recipeList, index)=>{
                    return (
                        <tr className="table-warning" key={index}>
                            <td>{recipeList.name}</td> 
                            <td>{recipeList.cookTime}</td>
                            <td>{recipeList.instructions}</td>
                            
                            <Link to={`/recipe/${recipeList._id}`}> View </Link>
                            <Link to={`/recipe/${recipeList._id}/edit`}> Edit </Link>
                            <button className="btn btn-danger" onClick={() => handleDelete(recipeList._id)}> Delete </button>
                        </tr>
                         )})   
                    }    
                        
                </tbody>
            </table>
            <Link to={`/recipes/new`}><button className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2">Add a Recipe</button></Link>
        </div>

    )



}

export default ViewAllRecipes;