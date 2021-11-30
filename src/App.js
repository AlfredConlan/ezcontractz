import "./App.css";
// import Data from "./Components/taskList";
import React from "react";
// import BasicTable from "./Components/dataTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./Components/TaskList";
import Navbar from "./Components/Navbar";
import ContractorSearch from "./Components/ContractorSearch";
import LoginRegistration from "./Components/LoginRegistration";
import AdminDash from "./Components/AdminDash";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />{" "}
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/ContractorSearch" element={<ContractorSearch />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/admin" element={<AdminDash />} />
          <Route path="/login" element={<LoginRegistration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
