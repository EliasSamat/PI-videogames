// import React from 'react';
 import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginForm from './componentes/LandingPage';
import GameDetail from "./componentes/gameDetail.jsx"
import Games from './componentes/games';  // Importa el componente Games

function App() {
  return (

    <Router>
      <Route path="/" exact component={LoginForm} />
      <Route path="/pagPrincipal" component={Games} />
      <Route path="/game/:id" component={GameDetail} />
    </Router>
  );
}

export default App;



