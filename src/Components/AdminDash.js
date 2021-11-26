import React from "react";
// import BasicTable from './dataTable'
import AdminTable from "./AdminTable";

export default function AdminDash() {
  return (
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
