function LoginRegistration() {
  return (
    <div className="container border border-primary border-2 mt-3 w-25">
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
          <form className="pb-3 pt-3 was-validated">
            <div className="mb-3 text-start form-group">
              <label for="InputEmail" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="InputEmail" placeholder="Enter email" />
              {/* <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please enter a valid email.</div> */}
            </div>
            <div className="mb-3 text-start">
              <label for="InputPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="InputPassword1" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>{" "}
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <form className="pb-3 pt-3">
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
  );
}

export default LoginRegistration;
