

  import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import Games from './Games'; // Importa el componente Games

function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginForm} />
      <Route path="/pagPrincipal" component={Games} />
    </Router>
  );
}

export default App;
