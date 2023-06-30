import React, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import cookie from '../assets/cookie.png';


const Dashboard = (props) => {
    const [userList, setUserList] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/users', {withCredentials: true})
            .then( res => {
                console.log(res.data);
                setUserList(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    

    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
            .then(res => {
                navigate('/')
            })

            .catch(err => {
                console.log(err);
            })
    }

  return (
    <div>
        <h1>Welcome to Dashboard!</h1>
        <img src={cookie} alt="success"/>
        <h3>Users:</h3>
        {/* <div>
            {userList.map((userList, index) => {
                return (
                    <div key={index}>
                        <p>{userList.firstName}</p>
                    </div>
                )
            })}
        </div> */}
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Dashboard