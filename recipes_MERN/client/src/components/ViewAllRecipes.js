import React, { useEffect, useState } from 'react';
import axios from "axios";



const ViewAllRecipes = () => {
    const [recipeList, setRecipeList] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8000/api/recipes')
        .then(response => {
            console.log(response);
            setRecipeList(response.data)
        })},[]
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cook Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    recipeList.map((recipeList, index)=>{
                    return (
                        <div key={index}>
                            <tr>{recipeList.name}</tr> 
                            <tr>{recipeList.cookTime}</tr>
                            <tr>{recipeList.instructions}</tr>
                        </div>
                         )})   
                    }    
                        
                </tbody>
            </table>
        </div>

    )



}

export default ViewAllRecipes;