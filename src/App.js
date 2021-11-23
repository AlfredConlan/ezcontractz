import "./App.css";
// import Data from "./Components/taskList";
import React from 'react';
// import BasicTable from "./Components/dataTable";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TaskList from "./Components/taskList";
import AdminDash from "./Components/adminDash";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Welcome to EZContractz</h1>
        </p>
        <Router>
        <Switch>
          <Route path="/home">
            <TaskList/>
          </Route>
          <Route path="/admin">
            <AdminDash />
          </Route>
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
