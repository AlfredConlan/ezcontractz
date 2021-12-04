// src/views/profile.js

import React from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, nickname } = user;

  return (
    <div className="container">
      <div>
        <h1 className="text-center p-4 text-primary">Profile</h1>
      </div>
      <div className="row align-items-center profile-header mt-lg-3">
        <div className="col-md-6 mb-3 text-lg-end text-md-end">
          <img src={picture} alt="Profile" className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" />
        </div>
        <div className="col-md-3 text-start text-md-left">
          <p>
            <h2>{name}</h2>
          </p>
          <p className="lead text-muted">Email: {email}</p>
          <p className="lead text-muted">Username: {nickname}</p>
        </div>
      </div>
      {/* <div className="row">
        <pre className="col-12 text-light bg-dark p-4">{JSON.stringify(user, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default Profile;
