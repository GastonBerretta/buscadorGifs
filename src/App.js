import React from 'react';
import './App.css';
import Gifs from './components/Gifs.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Trending from './components/Trending';
import Detalle from './components/Detalle';


function App() {
  return (
    <Router>
    <div className="contendor">
      <div className="header">
        <Link to="/" className="boton-header">Buscador</Link>
        <Link to="/trending" className="boton-header">Trending</Link>
      </div>
      <hr />
      <Switch>
        <Route path="/" exact>
          <Gifs/>
        </Route>
        <Route path="/trending">
          <Trending/>
        </Route>
        <Route path="/:id" exact>
         <Detalle/>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
