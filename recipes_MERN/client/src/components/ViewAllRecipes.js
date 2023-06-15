import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Button, Table } from 'react-bootstrap';



const ViewAllRecipes = () => {
    const [recipeList, setRecipeList] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/recipes')
        .then(res => {
            console.log(res);
            setRecipeList(res.data)
        })},[]
    )


    return (
        <div className="mt-5 px-4 py-4">
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
                            <td>view edit delete</td>
                        </tr>
                         )})   
                    }    
                        
                </tbody>
            </table>
        </div>

    )



}

export default ViewAllRecipes;