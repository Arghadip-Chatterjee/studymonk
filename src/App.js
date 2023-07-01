import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Login';
import JobPortal from './JobPortal';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/home" element={<JobPortal />} />
          <Route
            exact
            path="/"
            element={<Login />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
