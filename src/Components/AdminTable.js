import React, { useState, useEffect } from 'react';
// import './App.css';
import MaterialTable from 'material-table';
import axios from 'axios';


export default function AdminTable() {
    const [users, setUsers] = useState([])
    const columns = [
        { title: "ID", field: "id" },
        { title: "First Name", field: "firstName" },
        { title: "Last Name", field: "lastName" },
        { title: "Email", field: "email" },
        { title: "Location", field: "location" },
        { title: "Username", field: "userName" },
        // { title: "Password", field: "password" },
        { title: "Role", field: "role" },
        // { title: "Created At", field: "createdAt" },
        // { title: "Updated At", field: "updatedAt" }
    ]
    useEffect(() => {
        fetch("http://localhost:3001/users")
          .then(resp => resp.json())
          .then(resp => {
            setUsers(resp)
            console.log(users);
          })
      }, [])

    return (
        <div className="App">
            <MaterialTable
                title="Your Tasks"
                data={users}
                columns={columns}
                options={{
                    rowStyle: {
                      fontSize: 14,
                    }
                  }}
            />
        </div>
    );
}