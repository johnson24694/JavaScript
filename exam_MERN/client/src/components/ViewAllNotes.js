import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';



const ViewAllNotes = (props) => {
    const [noteList, setNoteList] = useState([])
    const {id} = useParams();

    useEffect( () => {
        axios.get('http://localhost:8000/api/notes')
        .then(res => {
            console.log(res);
            setNoteList(res.data)
        })},[]
    )

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
        <div className="mt-5 px-4 py-4">
        <div className="border-bottom border-dark">
            <h1 className="h1 display-2">Note Wall</h1>
            <p className="fs-5 text">Leave a Note</p>
        </div>
                <table className = "table table-warning table-striped table-hover border mt-4">
                    <tbody>
                        {
                        noteList.map((noteList, index)=>{
                        return (
                            <tr className="table-warning" key={index}>
                                <td className="fs-4 text fw-bolder">{noteList.title}</td> 
                                <td>{noteList.description}</td>
                                <td><Link to={`/note/${noteList._id}/edit`}> Edit </Link></td>
                            </tr>
                            
                            )})   
                        }    
                            
                    </tbody>
                </table>
            <Link to={`/notes/new`}><button className="btn btn-success btn-lmd mx-3 px-5 py-3 mt-2">Write Note</button></Link>
        </div>

    )



}

export default ViewAllNotes;