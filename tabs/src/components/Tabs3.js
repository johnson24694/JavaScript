import React, { useState } from 'react'

const Tabs3 = (props) => {

  const [ tabThreeList, setTabThreeList ] = useState("");

  
  

  return (
    <form>
      <div>
      <textarea 
          rows="20"
          cols="200"
          placeholder='Enter your information here.'
          onChange={ (e) => setTabThreeList(e.target.value)} 
          value={ tabThreeList}
         ></textarea>

      </div>


    </form>
  
  )
}

export default Tabs3