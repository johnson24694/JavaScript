import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Tabs2 from './components/Tabs2';
import Tabs3 from './components/Tabs3';

function App() {

  const [ tabOneList, setTabOneList ] = useState([]);
  const [ tabTwoList, setTabTwoList ] = useState([]);
  const [ tabThreeList, setTabThreeList ] = useState([]);

  const handleOnClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <button onClick={(e) => {<Tabs />}}>Tab 1</button>
      
      <button>Tab 2</button>
      <Tabs2 />
      <button>Tab 3</button>
      <Tabs3 />
    </div>
  );
}

export default App;
