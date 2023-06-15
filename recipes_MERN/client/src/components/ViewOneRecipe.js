import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const ViewOneRecipe = (props) => {
    const [recipeList, setRecipeList] = useState({})
    const {id} = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/recipe/" + id)
            .then( res => {
                console.log(res.data);
                setRecipeList(res.data);
            })
            .catch( err => console.log(err) );
    }, []);


    return (
        <div className="detail-component">
            <h2>Recipe Detail</h2>
            <p>Name:  {recipeList.name}</p>
            <p>Description:  {recipeList.description}</p>
            <p>Instructions:  {recipeList.instructions}</p>
            <p>Cook Time:  {recipeList.cookTime}</p>
        </div>
    );
}
export default ViewOneRecipe;
