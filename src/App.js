import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header';
import Remedies from './Components/Remedies';
import Booking from './Components/Booking';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div style={{ marginTop: '64px' }}>
          {/* Add a margin top of 64px to create space for the navigation bar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/remedies" element={<Remedies />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/login" element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
