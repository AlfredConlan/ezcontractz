import React, { useState, useEffect } from 'react';
// import './App.css';
import MaterialTable from 'material-table';


function BasicTable() {

  const [data, setData] = useState([])
  const columns = [
    { title: "Task Name", field: "taskName" },
    { title: "Category", field: "category" },
    { title: "Description", field: "description" },
    { title: "Assigned Contractor", field: "assignedContractor" },
    { title: "Scheduled", field: "scheduled" },
    { title: "Date", field: 'date' },
    { title: "Max Budget", field: 'maxBudget' }
  ]
  useEffect(() => {
    fetch("api.mocki.io/v2/23e13f93/")
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
        console.log(data);
      })
  }, [])

  return (
    <div className="App">
      <MaterialTable
        title="Your Tasks"
        data={data}
        columns={columns}
      />
    </div>
  );
}

export default BasicTable;