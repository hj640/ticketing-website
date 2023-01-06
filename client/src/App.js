import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import ReservePage from './components/ReservePage/ReservePage';
import ReserveSuccessPage from './components/ReserveSuccessPage/ReserveSuccessPage';
import './components/Components.css'


function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}/>
            <Route exact path="/reserve" element={<ReservePage/>}/>
            <Route exact path="/reserveSuccess" element={<ReserveSuccessPage/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
