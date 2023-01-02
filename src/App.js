import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/me" element={<><Home /><Profile /></>} />
      </Routes>
    </Router>
  )
}

export default App