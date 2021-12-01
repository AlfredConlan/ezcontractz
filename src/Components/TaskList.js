import React from "react";
// import BasicTable from './dataTable'
import TaskTable from "./TasksTable";

export default function TaskList() {
  return (
    //Nav Bar Will render Here as component
    <container>
      <container className="profileHouseSection">
        <h1>Welcome to the App </h1>
      </container>
      <container className="taskList">
        <TaskTable />
      </container>
    </container>
  );
}
