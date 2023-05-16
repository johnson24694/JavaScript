import React, { useState } from 'react'

const Tabs2 = (props) => {

  const [ tabTwoList, setTabTwoList ] = useState("");

  
  

  return (
    <form>
      <div>
      <textarea 
          rows="20"
          cols="200"
          placeholder='Enter your information here.'
          onChange={ (e) => setTabTwoList(e.target.value)} 
          value={ tabTwoList}
         ></textarea>

      </div>


    </form>
  
  )
}

export default Tabs2