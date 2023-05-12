import React, { useState } from 'react';
    
const Form = (props) => {
    

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    

    
     
    return (
        <form>
            
            <div>
                <label htmlFor='firstName'>First Name </label> 
                <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label htmlFor='lastName'>Last Name </label> 
                <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label htmlFor='email'>Email Address </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label htmlFor='password'>Password </label>
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password </label>
                <input type="text" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
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