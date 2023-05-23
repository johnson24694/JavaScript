import React, {useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link, 
  useNavigate,
  useParams
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route exact path="/:word" element={<ParamsComponent />}></Route>
          <Route exact path="/:word/:color/:bgCol" element={<ParamsComponent />}></Route>
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
