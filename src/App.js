import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AddTodo } from "./components/AddTodo";
import { EditTodo } from "./components/EditTodo";
import { GlobalProvider } from "./context/GlobalState";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddTodo} />
            <Route path="/edit/:id" component={EditTodo} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
