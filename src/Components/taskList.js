import React from 'react';
// import BasicTable from './dataTable'
import BasicTable from './Home';
import AdminTable from './AdminTable';

export default function TaskList() {
    return (
        //Nav Bar Will render Here as component 
           <container>
               <container className="profileHouseSection">
                <h1>Welcome to the App </h1>
               </container>
               <container className="taskList">
                <BasicTable/>
               </container>
           </container>
    )
}
