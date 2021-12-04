import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Trash, Pencil } from "react-bootstrap-icons";

const AdminTable = (props) => {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState("");
  const usersRef = useRef();

  usersRef.current = users;

  useEffect(() => {
    retrieveUsers();
  }, []);

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

    props.history.push("/tutorials/" + id);
  };

  const deleteUsers = (rowIndex) => {
    const userName = usersRef.current[rowIndex].user_name;
    users
      .remove(userName)
      .then((response) => {
        props.history.push("/users/delete/" + userName);
        let newUsers = [...usersRef.current];
        newUsers.splice(rowIndex, 1);

        setUsers(newUsers);
      })
      .catch((e) => {
        console.log(e);
      });
  };

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
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openUsers(rowIdx)}>
                <Pencil className="far fa-edit action mr-2" />
              </span>
              <span onClick={() => deleteUsers(rowIdx)}>
                <Trash className="bi bi-trash" />
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
