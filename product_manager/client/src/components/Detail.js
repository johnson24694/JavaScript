import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams();
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="detail-component">
            <h2>Product Detail</h2>
            <p>Title:  {product.title}</p>
            <p>Price:  ${product.price}</p>
            <p>Description:  {product.description}</p>
            <button onClick={() => deleteHandler(product._id)}>Delete Product</button>
        </div>
    );
}
export default Detail;

