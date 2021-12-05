import "./Registration.css";
import { useAuth0 } from "@auth0/auth0-react";

function Registration() {
  const { user } = useAuth0();
  const { given_name, family_name, email } = user;

  function registerUser() {
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: document.getElementById("InputFirstName").value,
        lastName: document.getElementById("InputLastName").value,
        userName: document.getElementById("InputUserName").value,
        email: document.getElementById("InputEmail").value,
        location: document.getElementById("InputZip").value,
        role: "user",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        const userName = document.getElementById("InputUserName").value;
        localStorage.setItem("UserName", userName);
      })
      .then((res) => {
        let user_name = localStorage.getItem("UserName");
        console.log("Username is: " + user_name);
        if (user_name === "No One" || user_name === null) {
          return;
        } else {
          alert("User was added");
          document.location.replace("http://localhost:3000/tasks");
        }
      });
  }
  function validateRegistration(e) {
    e.preventDefault();
    if (document.getElementById("InputFirstName").value === "") {
      alert("Please provide your First Name!");
      document.getElementById("InputFirstName").focus();
      return false;
    }
    if (document.getElementById("InputLastName").value === "") {
      alert("Please provide your Last Name!");
      document.getElementById("InputLastName").focus();
      return false;
    }
    if (document.getElementById("InputUserName").value === "") {
      alert("Please provide your User Name!");
      document.getElementById("InputUserName").focus();
      return false;
    }
    if (document.getElementById("InputEmail").value === "") {
      alert("Please provide your email!");
      document.getElementById("InputEmail").focus();
      return false;
    }
    if (document.getElementById("InputZip").value === "") {
      alert("Please provide your Zip Code!");
      document.getElementById("InputZip").focus();
      return false;
    } else if (document.getElementById("InputZip").value.length !== 5) {
      console.log(document.getElementById("InputZip").value.length);
      alert("Zip Code must be 5 digits!");
      document.getElementById("InputZip").focus();
      return false;
      // }
      // if (document.getElementById("InputPassword").value === "") {
      //   alert("Please provide your Password!");
      //   document.getElementById("InputPassword").focus();
      //   return false;
    } else {
      registerUser();
    }
  }
  return (
    <div className="row showBackground">
      <div className="col-s-0 col-md-1 col-lg-4"></div>
      <div className="col">
        <div className="container border border-primary border-2 mt-5 bg-white loginBackground">
          <form
            className="pb-3 pt-3"
            onSubmit={(e) => {
              validateRegistration(e);
            }}
          >
            <div className="mb-3 text-start">
              <h1 className="text-center p-4 text-primary">Please fill out your profile</h1>
              <label for="InputFirstName" className="form-label">
                First Name
              </label>
              <input type="text" className="form-control" id="InputFirstName" required value={given_name} />
            </div>
            <div className="mb-3 text-start">
              <label for="InputLastName" className="form-label">
                Last Name
              </label>
              <input type="text" className="form-control" id="InputLastName" required value={family_name} />
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
              <input type="email" className="form-control" id="InputEmail" required value={email} />
            </div>
            <div className="mb-3 text-start">
              <label for="InputZip" className="form-label">
                Zip Code
              </label>
              <input type="text" className="form-control" id="InputZip" required />
            </div>
            {/* <div className="mb-3 text-start">
              <label for="InputPassword" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="InputPassword" required />
            </div> */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>{" "}
        </div>
      </div>
      <div className="col-s-0 col-md-1 col-lg-4"></div>
    </div>
  );
}

export default Registration;
