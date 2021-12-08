// import Data from "./Components/taskList";
import React from "react";
// import BasicTable from "./Components/dataTable";
import { Switch, Route } from "react-router-dom";
import TaskList from "./Components/TaskList";
import Navbar from "./Components/Navbar";
import ContractorSearch from "./Components/ContractorSearch";
import AdminDash from "./Components/AdminDash";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";
import Profile from "./Components/Profile";
import ProtectedRoute from "./auth/protected-route";
import Registration from "./Components/Registration";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <Auth0ProviderWithHistory>
      <Navbar />{" "}
      <Switch>
        {/* UNCOMMENT THE SECTION BELOW TO ENABLE LOGIN/REGISTRATION */}
        {/*-------------------------------------------------------------*/}

        <ProtectedRoute exact path="/" component={TaskList} />

        <ProtectedRoute exact path="/contractor-search" component={ContractorSearch} />

        <ProtectedRoute exact path="/tasks" component={TaskList} />

        <ProtectedRoute exact path="/admin" component={AdminDash} />

        <ProtectedRoute exact path="/profile" component={Profile} />

        <ProtectedRoute exact path="/aboutus" component={AboutUs} />

        <ProtectedRoute exact path="/registration" component={Registration} />

        {/* UNCOMMENT THE SECTION BELOW TO DISABLE LOGIN/REGISTRATION */}
        {/*-------------------------------------------------------------*/}

        {/* <Route exact path="/" component={TaskList} />

        <Route exact path="/contractor-search" component={ContractorSearch} />

        <Route exact path="/tasks" component={TaskList} />

        <Route exact path="/admin" component={AdminDash} />

        <Route exact path="/profile" component={Profile} />

        <Route exact path="/registration" component={Registration} /> */}
      </Switch>
    </Auth0ProviderWithHistory>
  );
}

export default App;
