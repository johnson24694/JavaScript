import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const EditForm= (props) => {
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(""); 
    const [noteList, setNoteList] = useState([])
    const {id} = useParams();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/note/' + id)
            .then(res => {
                setTitle(res.data.title);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/note/${id}`, {
            title,
            description,
        })
            .then((res)=>{
                console.log(res);
                navigate("/")
            })
            .catch((err)=> {
                console.log(err)
                console.log(err.response.data.errors)
                setErrors(err.response.data.errors)
            });
    }

    const handleDelete = (noteID) => {
        axios.delete(`http://localhost:8000/api/note/${id}`)
            .then(res => {
                console.log("***delete successful***", res.data)
                const filteredNotesList = noteList.filter(note => {
                    return note._id != noteID});
                    setNoteList(filteredNotesList)
                })        
    }
    
    return (
        <form className="mt-5 px-3 py-4" onSubmit={onSubmitHandler}>
            <h2 className="h1 display-2">Note</h2>
            <div className="mt-4 py-4 border border-2 dark">
            <p>
                <label className="fw-medium">Note Title:</label><br/>
                <input type="text" name="title" placeholder="Title goes here" value={title} onChange = {(e)=>setTitle(e.target.value)}/>
                {errors.title ? <p>{errors.title.message}</p> : null}
            </p>
            <p>
                <label className="fw-medium">Note Body:</label><br/>
                <input type="textarea" name="description" placeholder="Description goes here" value={description}  onChange = {(e)=>setDescription(e.target.value)}/>
                {errors.description ? <p>""{errors.description.message}</p> : null}
            </p>
            </div>
            <input className="btn btn-success btn-md mx-3 px-5 py-3 mt-4" type="submit" value="Edit Note"/>
            <Link to={`/`}><button className="btn btn-secondary btn-md mx-3 px-5 py-3 mt-4">Back to Home</button></Link>
            <button className="btn btn-danger btn-md mx-3 px-5 py-3 mt-4" onClick={() => handleDelete(noteList._id)}> Delete </button>
        </form>
    )
}
export default EditForm;
