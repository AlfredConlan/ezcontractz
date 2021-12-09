import React, { useState, useEffect, useMemo, useRef, setState } from "react";
import { useTable } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import {Trash, Pencil} from 'react-bootstrap-icons';
import axios from 'axios';
// const user = require("../models/users");



const AdminTable = (props) => {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");
  const usersRef = useRef();
  const [triggerUseEffect, setTriggerUseEffect] = useState(1);

  usersRef.current = users;

  useEffect(() => {
    retrieveUsers();
  }, [triggerUseEffect]);

  const onChangeSearchUsers = (e) => {
    const searchUsers = e.target.value;
    setSearchUsers(searchUsers);
  };

  // Fetching users from database
  const retrieveUsers = () => {
    fetch("http://localhost:3001/users")
      .then((resp) => resp.json())
      .then((resp) => {
        setUsers(resp);
        console.log(users);
      });
  };

  const refreshList = () => {
    retrieveUsers();
  };

  const findByTitle = () => {
    users
      .findByTitle(users)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openUsers = (rowIndex) => {
    const id = users.current[rowIndex].id;
    props.history.push("" + id);
  };

  const deleteUsers = (rowIndex) => {
    const userName = usersRef.current[rowIndex].id; 
    axios.delete("http://localhost:3001/users/delete/"+userName)
    .then(resp => {
      console.log(resp)
      refreshList();
      // if (resp.data.userDeleted){
      //   setTriggerUseEffect(triggerUseEffect+1)
      // }
    })};


  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "User Name",
        accessor: "userName",
      },
      {
        Header: "email",
        accessor: "email",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          console.log(props);
          const rowIdx = props.row.id;
          return (
            <div className="grid">
              <span onClick={() => openUsers(rowIdx)}>
                <Pencil className="far fa-edit action mr-2" />
              </span> 
              <span onClick={() => {
                deleteUsers(rowIdx)
                }}>
                <Trash className="bi bi-trash"/>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data: users,
  });

  return (
    <div className="container">
      <div className="list row">
        <div className="col-md-8 container">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search by title" value={searchUsers} onChange={onChangeSearchUsers} />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary btnOrange" type="button" onClick={findByTitle}>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12 list">
          <table className="table table-striped table-bordered" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;