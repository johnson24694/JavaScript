import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateForm from './components/CreateForm';
import ViewAllRecipes from './components/ViewAllRecipes';
import ViewOneRecipe from './components/ViewOneRecipe';
import EditForm from './components/EditForm';



import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
              <Routes>
                <Route element={<ViewAllRecipes/>} path="/" default />
                <Route element={<CreateForm/>} path="/recipes/new" /> 
                <Route element={<ViewOneRecipe/>} path="/recipe/:id"/>
                <Route element={<EditForm/>} path="/recipe/:id/edit"/>
              </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
