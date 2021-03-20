import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layouts from "../components/Layout";
import Home from "../page/Home";
import NewPerfil from "../page/NewPerfil";
import NotFound from "../components/NotFound";

function App() {
  return (
      <BrowserRouter>
          <Layouts>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/crear-perfil" component={NewPerfil}/>
                  <Route component={NotFound}/>
              </Switch>
          </Layouts>
      </BrowserRouter>
  );
}

export default App;
