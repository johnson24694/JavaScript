import React from 'react';
import { useParams } from 'react-router-dom';

const ParamsComponent = (props) => {
    const {word, color, bgCol} = useParams();

    return (
        <div>

            {
                isNaN(word)?
                <p style={
                    color?
                    {color: color, backgroundColor: bgCol}
                    :null
                }>
                    The word is: {word}
                </p>
                :
                <p>
                    The number is: {word}
                </p>
            
            
            }

        </div>
    )
}

export default ParamsComponent;