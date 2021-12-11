import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Trash, Pencil } from "react-bootstrap-icons";
import "./styles.css";

const TaskTable = (props) => {
  const [tasks, setTasks] = useState([]);
  const [searchTasks, setSearchTasks] = useState("");
  const tasksRef = useRef();

  tasksRef.current = tasks;

  useEffect(() => {
    retrieveTasks();
  }, []);

  const onChangeSearchTasks = (e) => {
    const searchTasks = e.target.value;
    setSearchTasks(searchTasks);
  };

  // Fetching users from database
  const retrieveTasks = () => {
    fetch("https://ezcontractz.herokuapp.com:3001/tasks")
      .then((resp) => resp.json())
      .then((resp) => {
        setTasks(resp);
        console.log(tasks);
      });
  };

  const refreshList = () => {
    retrieveTasks();
  };

  const findByTitle = () => {
    tasks
      .findByTitle(tasks)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openTasks = (rowIndex) => {
    const id = tasks.current[rowIndex].id;

    props.history.push("/tasks/" + id);
  };

  const deleteTasks = (rowIndex) => {
    const tasksName = tasksRef.current[rowIndex].taskName;
    tasks
      .remove(tasksName)
      .then((response) => {
        props.history.push("/tasks/delete/" + tasksName);
        let newTasks = [...tasksRef.current];
        newTasks.splice(rowIndex, 1);

        setTasks(newTasks);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Task Name",
        accessor: "taskName",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Assigned Contractor",
        accessor: "assignedContractor",
      },
      {
        Header: "Scheduled",
        accessor: "scheduled",
      },
      {
        Header: "Max Budget",
        accessor: "maxBudget",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openTasks(rowIdx)}>
                <Pencil className="far fa-edit action mr-2" />
              </span>
              <span onClick={() => deleteTasks(rowIdx)}>
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
    data: tasks,
  });

  return (
    <div className="container">
      <div className="list row">
        <div className="col-md-8 container">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search by title" value={searchTasks} onChange={onChangeSearchTasks} />
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

export default TaskTable;
