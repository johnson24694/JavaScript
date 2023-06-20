import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CreateForm from './components/CreateForm';
import ViewAllAuthors from './components/ViewAllAuthors';
import ViewOneAuthor from './components/ViewOneAuthor';
import EditForm from './components/EditForm';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
              <Routes>
                <Route element={<ViewAllAuthors/>} path="/" default />
                <Route element={<CreateForm/>} path="/authors/new" /> 
                <Route element={<ViewOneAuthor/>} path="/author/:id"/>
                <Route element={<EditForm/>} path="/author/:id/edit"/>
              </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
