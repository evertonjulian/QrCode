import React from "react";
import Home from "./components/home/home";
import { Container } from 'react-materialize';
import { Route, Switch } from "react-router";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>        
      </Switch>
    </Container>
  </main>  
);

export default Main;