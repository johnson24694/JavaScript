import React, { useState } from 'react';
    
const Form = (props) => {
    

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    return (
        <form onSubmit={() => {}} >
            
            <div>
                <label htmlFor='firstName'>First Name </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                {
                    firstName.length < 2 && firstName.length > 0 ? (
                        <p>First Name must be at least 2 characters</p>
                      ) : ""
                }            
            </div>
            <div>
                <label htmlFor='lastName'>Last Name </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                {
                    lastName.length < 2 && lastName.length > 0 ? (
                        <p>Last Name must be at least 2 characters</p>
                      ) : ""
                }
            </div>
            <div>
                <label htmlFor='email'>Email Address </label> 
                <input type="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                {email.length < 5 && email.length > 0 ? <p>Email must be at least 5 characters</p>: ""}
            </div>
            <div>
                <label htmlFor='password'>Password </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                {password.length < 8 && password.length > 0 ? (
                <p>Password must be at least 8 characters</p> ) : ""}
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                {confirmPassword !== password ? <p>Passwords must match</p> : ""}
            </div>
            
            <div>
                <h4>
                    Your Form Data
                </h4>
                <p>First Name: {firstName}</p>
                <p>Last Name:{lastName}</p>
                <p>Email: {email}</p>
                <p>Password:{password}</p>
                <p>Confirm Password:{confirmPassword}</p>
            </div>
        </form>
        
    );
}
export default Form;