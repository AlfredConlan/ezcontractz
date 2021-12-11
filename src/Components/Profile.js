// src/views/profile.js

// import React from "react";
import { useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user } = useAuth0();
  const { email } = user;

  useEffect(() => {
    (async function () {
      const urlString = "https://ezcontractz.herokuapp.com:3001/users/" + email;
      await fetch(urlString, {
        method: "GET",
        headers: {
          // Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            console.log("The response is: ", response);
            const Image = document.getElementById("userImage");
            const FirstName = document.getElementById("userFirstName");
            const LastName = document.getElementById("userLastName");
            const Email = document.getElementById("userEmail");
            const UserName = document.getElementById("userUserName");
            const Location = document.getElementById("userLocation");

            Image.innerHTML = response[0].userImage;
            FirstName.innerHTML = "First Name: <h5>" + response[0].firstName + "</h5>";
            LastName.innerHTML = "Last Name: <h5>" + response[0].lastName + "</h5>";
            Email.innerHTML = "Email: <h5>" + response[0].email + "</h5>";
            UserName.innerHTML = "Username: <h5>" + response[0].userName + "</h5>";
            Location.innerHTML = "Location: <h5>" + response[0].location + "</h5>";
          } else {
            document.location.replace("https://ezcontractz.herokuapp.com:3000/registration");
          }
        });
    })();
  }, []);

  return (
    <div className="container">
      <div>
        <h1 className="text-center p-4 text-primary">Profile</h1>
      </div>
      <div className="row align-items-center profile-header mt-lg-3">
        <div className=" container col-md-6 text-start text-md-center">
          <img id="userImage" src="" alt="Profile" className="rounded-circle img-fluid profile-picture mb-3 mb-md-0" />
          <p id="userFirstName" className="lead"></p>
          <p id="userLastName" className="lead"></p>
          <p id="userEmail" className="lead"></p>
          <p id="userUserName" className="lead"></p>
          <p id="userLocation" className="lead"></p>
        </div>
      </div>
      {/* <div className="row">
        <pre className="col-12 text-light bg-dark p-4">{JSON.stringify(user, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default Profile;
