function LoginRegistration() {
  async function loginUser() {
    console.log("loginUser started");
    let response = await fetch("http://localhost:3001/loginAttempt", {
      method: "POST",
      headers: {
        // "Accept": "text/html",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.isMatch === "false") {
          console.log("Match is false");
          alert("The username & password combination is incorrect. Please try again.");
        } else if (res.isMatch === "true") {
          console.log("Match is true");
          document.location.replace("http://localhost:3000/tasks");
        }
      });
  }

  function validateLogin(e) {
    e.preventDefault();
    console.log("Validation Started");
    if (document.getElementById("email").value === "") {
      alert("Please provide your email!");
      document.getElementById("email").focus();
      return false;
    }
    if (document.getElementById("password").value === "") {
      alert("Please provide your Password!");
      document.getElementById("password").focus();
      return false;
    } else {
      console.log("validation end, start loginUser");
      loginUser();
    }
  }

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
        location: document.getElementById("InputLocation").value,
        password: document.getElementById("InputPassword").value,
        role: "user",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("User was added");
        document.location.replace("http://localhost:3000/tasks");
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
    if (document.getElementById("InputLocation").value === "") {
      alert("Please provide your Location!");
      document.getElementById("InputLocation").focus();
      return false;
    }
    if (document.getElementById("InputPassword").value === "") {
      alert("Please provide your Password!");
      document.getElementById("InputPassword").focus();
      return false;
    } else {
      registerUser();
    }
  }
  return (
    <div className="row">
      <div className="col-s-0 col-md-1 col-lg-4"></div>
      <div className="col">
        <div className="container border border-primary border-2 marginTop">
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
              <form
                className="pb-3 pt-3 was-validated"
                onSubmit={(e) => {
                  validateLogin(e);
                }}
              >
                <div className="mb-3 text-start form-group">
                  <label for="InputEmail" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" placeholder="Enter email" id="email" />
                </div>
                <div className="mb-3 text-start">
                  <label for="InputPassword1" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>{" "}
            </div>

            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <form
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
                  <label for="InputLocation" className="form-label">
                    Location
                  </label>
                  <input type="text" className="form-control" id="InputLocation" required />
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
              </form>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="col-s-0 col-md-1 col-lg-4"></div>
    </div>
  );
}

export default LoginRegistration;
