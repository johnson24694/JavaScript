import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>    
      </BrowserRouter>
      
    </div>
  );
}

export default App;
