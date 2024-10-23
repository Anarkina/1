import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from 'features/Register/RegisterPage';
const App = () => (
  <Router>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </Router>
);

export default App;
