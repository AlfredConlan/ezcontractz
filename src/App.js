import "./App.css";
// import Data from "./Components/taskList";
import React from "react";
// import BasicTable from "./Components/dataTable";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TaskList from "./components/taskList";
import AdminDash from "./components/AdminDash";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p>
          <h1>Welcome to EZContractz</h1>
        </p>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/admin" element={<AdminDash />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
