import React, { useState } from 'react'

const Tabs = (props) => {

  const [ tabOneList, setTabOneList ] = useState("");

  
  return (
    <form>
      <div>
        <textarea 
          rows="20"
          cols="200"
          placeholder='Enter your information here.'
          onChange={ (e) => setTabOneList(e.target.value)} 
          value={ tabOneList}
         ></textarea>

      </div>


    </form>
  
  )
}

export default Tabs