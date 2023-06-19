import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateForm from './components/CreateForm';
import ViewAllNotes from './components/ViewAllNotes';
import EditForm from './components/EditForm';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Routes>
                <Route element={<ViewAllNotes/>} path="/" default />
                <Route element={<CreateForm/>} path="/notes/new" /> 
                <Route element={<EditForm/>} path="/note/:id/edit"/>
              </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
