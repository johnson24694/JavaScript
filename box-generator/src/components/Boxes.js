import React, { useState } from 'react'

const Boxes = (props) => {

    const [oneColor, setOneColor] = useState("");
    const [colorList, setColorList] = useState([]);

    const handleGoals = (e) => { e.preventDefault();
    setColorList([...colorList, oneColor]);
    setOneColor("");
    
  }

    const boxStyle = {
      padding: '20px',
      height: '50px',
      width: '50px',
      border: '2px solid',

    }

  return (
    <form onSubmit={ handleGoals }>
      <div>
      <label htmlFor='oneColor'>Color </label> 
                <input type="text" value={oneColor} onChange={ (e) => setOneColor(e.target.value) } />
              <button>Add</button>
      </div>
      <div>
          {colorList.map((color, index) => (
            <div key={index} style={{
              display: "inline-block",
              margin: "10px",
              height: "50px",
              width: "50px",
              backgroundColor: color
            }}>
            </div>
          ))
        }

      </div>

        
    </form>
    
  );
}

export default Boxes