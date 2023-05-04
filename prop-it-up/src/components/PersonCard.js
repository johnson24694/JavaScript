import React from 'react';
    
const PersonCard = (props) => {
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    const { firstName, lastName, age, hairColor } = props
    return (
        <div>
            <h1>
                { lastName }, { firstName }
            </h1>
            <h3>
                Age: { age }
            </h3>
            <h3>
                Hair Color: { hairColor }
            </h3>
        </div>
    );
}
export default PersonCard;