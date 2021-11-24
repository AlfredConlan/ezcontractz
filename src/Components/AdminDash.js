import React from "react";
// import BasicTable from './dataTable'
import AdminTable from "./AdminTable";

export default function AdminDash() {
  return (
    //Nav Bar Will render Here as component
    <container>
      <container className="profileHouseSection">
        <h1>Welcome to the Admin Portal</h1>
      </container>
      <container className="Users">
        <AdminTable />
      </container>
    </container>
  );
}
