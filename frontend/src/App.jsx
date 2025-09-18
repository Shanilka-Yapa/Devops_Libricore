// src/App.jsx
import { useState } from 'react';

import Welcome from './Components/Welcome.jsx';
import Login from './components/Login.jsx';
import Register from './Components/Register.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/*public routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
