// import { Button } from 'react-bootstrap';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ExpnProvider from './Components/Store/ExpnProvider';
import PageRoutes from './Components/Routes/PageRoutes';

function App() {
  return (

    <ExpnProvider>
      <Router>
      <PageRoutes />
      </Router>
    </ExpnProvider>
    
  );
}

export default App;
