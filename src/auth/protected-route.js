// src/auth/protected-route.js

import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../Components/index";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => <Loading />,
    })}
    {...args}
  />
);

export default ProtectedRoute;

// import React from "react";
// import { withAuthenticationRequired } from "@auth0/auth0-react";
// import TaskList from "../Components/TaskList";

// const PrivateRoute = () => <TaskList />;

// export default withAuthenticationRequired(PrivateRoute, {
//   // Show a message while the user waits to be redirected to the login page.
//   onRedirecting: () => <div>Redirecting you to the login page...</div>,
// });
