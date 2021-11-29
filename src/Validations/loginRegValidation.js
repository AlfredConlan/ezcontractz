async function loginUser() {
  let response = await fetch("https://ezcontractz.herokuapp.com/loginAttempt", {
    method: "POST",
    headers: {
      // "Accept": "text/html",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_name: document.getElementById("user_name").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.isMatch === "false") {
        console.log("Match is false");
        alert("The username & password combination is incorrect. Please try again.");
      }
    })
    .then((res) => {
      console.log("Match is true");
      document.location.replace("http:/localhost:3000/tasks");
    });
}

function validateLogin() {
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
    loginUser();
  }
}
