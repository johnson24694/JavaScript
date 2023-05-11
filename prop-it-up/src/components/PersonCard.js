import React, { useState } from 'react';
    
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props

    const [userAge, setUserAge] = useState(age);
    // // const handleClick = () => {
    // //     setCount(count + 1);
    // }
     
    return (
        <div>
            <h1>
                { lastName }, { firstName }
            </h1>
            <h3>
                Age: { userAge }
            </h3>
            <h3>
                Hair Color: { hairColor }
            </h3>
            <button onClick = { () => setUserAge(userAge + 1) }>Birthday Button for { firstName } {lastName}</button>
        </div>
        
    );
}
export default PersonCard;