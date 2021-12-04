import React from "react";
import Profile from "./Profile";
// import BasicTable from './dataTable'
import TaskTable from "./TasksTable";

export default function TaskList() {
  return (
    <container>
      <container className="profileHouseSection">
        <h1 className="text-center p-4 text-primary">Your Tasks</h1>
      </container>
      <container className="taskList">
        <TaskTable />
      </container>
    </container>
  );
}
