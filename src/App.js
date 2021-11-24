import "./App.css";
// import Data from "./Components/taskList";
import React from "react";
// import BasicTable from "./Components/dataTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./Components/TaskList";
import AdminDash from "./Components/AdminDash";
import Navbar from "./Components/Navbar";
import LoginRegistration from "./Components/LoginRegistration";

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
            <Route path="/login" element={<LoginRegistration />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
