const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.json());

// Get all users
app.get("/users", (req, res) => {
  res.status(200).send({
    firstName: "Marty",
    lastName: "Johnson",
  });
});

// Save a user
app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  switch (req.body) {
    case !firstName:
      res.status(418).send({ message: "firstName is missing" });
      break;
    case !lastName:
      res.status(418).send({ message: "lastName is missing" });
      break;
    default:
      res.send({
        user: `User with First Name: ${firstName} and Last Name: ${lastName}`,
      });
  }
});
