import "./LoginRegistration.css";
// import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Profile from "./ProfileOld";

function LoginRegistration() {
  // const { loginWithRedirect } = useAuth0();
  // async function loginUser() {
  //   console.log("loginUser started");
  //   await fetch("http://localhost:3001/loginAttempt", {
  //     method: "POST",
  //     headers: {
  //       // "Accept": "text/html",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: document.getElementById("username").value,
  //       password: document.getElementById("password").value,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       localStorage.setItem("UserName", "No One");
  //       console.log(localStorage.getItem("UserName"));
  //       if (res.isMatch === "false") {
  //         alert("The username & password combination is incorrect. Please try again.");
  //         return;
  //       } else if (res.isMatch === "true") {
  //         const userName = document.getElementById("username").value;
  //         localStorage.setItem("UserName", userName);
  //       }
  //     })
  //     .then((res) => {
  //       let user_name = localStorage.getItem("UserName");
  //       console.log(user_name);
  //       if (user_name === "No One" || user_name === null) {
  //         console.log("If statement is true: " + user_name);
  //         return;
  //       } else {
  //         document.location.replace("http://localhost:3000/tasks");
  //       }
  //     });
  // }

  // function validateLogin(e) {
  //   e.preventDefault();
  //   console.log("Validation Started");
  //   if (document.getElementById("username").value === "") {
  //     alert("Please provide your Username!");
  //     document.getElementById("username").focus();
  //     return false;
  //   }
  //   if (document.getElementById("password").value === "") {
  //     alert("Please provide your Password!");
  //     document.getElementById("password").focus();
  //     return false;
  //   } else {
  //     // console.log("validation end, start loginUser");
  //     loginUser();
  //   }
  // }

  // function registerUser() {
  //   fetch("http://localhost:3001/users", {
  //     method: "POST",
  //     headers: {
  //       // Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       firstName: document.getElementById("InputFirstName").value,
  //       lastName: document.getElementById("InputLastName").value,
  //       userName: document.getElementById("InputUserName").value,
  //       email: document.getElementById("InputEmail").value,
  //       location: document.getElementById("InputZip").value,
  //       password: document.getElementById("InputPassword").value,
  //       role: "user",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const userName = document.getElementById("InputUserName").value;
  //       localStorage.setItem("UserName", userName);
  //     })
  //     .then((res) => {
  //       let user_name = localStorage.getItem("UserName");
  //       console.log("Username is: " + user_name);
  //       if (user_name === "No One" || user_name === null) {
  //         return;
  //       } else {
  //         alert("User was added");
  //         document.location.replace("http://localhost:3000/tasks");
  //       }
  //     });
  // }
  // function validateRegistration(e) {
  //   e.preventDefault();
  //   if (document.getElementById("InputFirstName").value === "") {
  //     alert("Please provide your First Name!");
  //     document.getElementById("InputFirstName").focus();
  //     return false;
  //   }
  //   if (document.getElementById("InputLastName").value === "") {
  //     alert("Please provide your Last Name!");
  //     document.getElementById("InputLastName").focus();
  //     return false;
  //   }
  //   if (document.getElementById("InputUserName").value === "") {
  //     alert("Please provide your User Name!");
  //     document.getElementById("InputUserName").focus();
  //     return false;
  //   }
  //   if (document.getElementById("InputEmail").value === "") {
  //     alert("Please provide your email!");
  //     document.getElementById("InputEmail").focus();
  //     return false;
  //   }
  //   if (document.getElementById("InputZip").value === "") {
  //     alert("Please provide your Zip Code!");
  //     document.getElementById("InputZip").focus();
  //     return false;
  //   } else if (document.getElementById("InputZip").value.length !== 5) {
  //     console.log(document.getElementById("InputZip").value.length);
  //     alert("Zip Code must be 5 digits!");
  //     document.getElementById("InputZip").focus();
  //     return false;
  //   }
  //   if (document.getElementById("InputPassword").value === "") {
  //     alert("Please provide your Password!");
  //     document.getElementById("InputPassword").focus();
  //     return false;
  //   } else {
  //     registerUser();
  //

  return (
    <div className="row showBackground">
      <div className="col-s-0 col-md-1 col-lg-4"></div>
      <div className="col">
        <div className="container border border-primary border-2 mt-5 bg-white loginBackground">
          <ul className="nav nav-tabs p-3" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                Login
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                Register
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              {/* <form
                className="pb-3 pt-3 was-validated"
                // onSubmit={(e) => {
                //   validateLogin(e);
                // }}
                onSubmit={(e) => {
                  loginWithRedirect();
                }}
              >
                <div className="mb-3 text-start form-group">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <input type="text" className="form-control" placeholder="Enter username" id="username" />
                </div>
                <div className="mb-3 text-start">
                  <label for="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>{" "} */}
              <Profile />
            </div>

            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              {/* <form
                className="pb-3 pt-3"
                onSubmit={(e) => {
                  validateRegistration(e);
                }}
              >
                <div className="mb-3 text-start">
                  <label for="InputFirstName" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="InputFirstName" required />
                </div>
                <div className="mb-3 text-start">
                  <label for="InputLastName" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="InputLastName" required />
                </div>
                <div className="mb-3 text-start">
                  <label for="InputUserName" className="form-label">
                    Username - this is what other users will see
                  </label>
                  <input type="text" className="form-control" id="InputUserName" required />
                </div>{" "}
                <div className="mb-3 text-start">
                  <label for="InputEmail" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="InputEmail" required />
                </div>
                <div className="mb-3 text-start">
                  <label for="InputZip" className="form-label">
                    Zip Code
                  </label>
                  <input type="text" className="form-control" id="InputZip" required />
                </div>
                <div className="mb-3 text-start">
                  <label for="InputPassword" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="InputPassword" required />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>{" "} */}
              <LoginButton />
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
      <div className="col-s-0 col-md-1 col-lg-4"></div>
    </div>
  );
}

export default LoginRegistration;
