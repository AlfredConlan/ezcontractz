const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const { Sequelize, Model, DataTypes } = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const db = {};
const bodyParser = require("body-parser");
const axios = require ('axios);

app.use(cors({ origin: (orig, cb) => cb(null, true), credentials: true }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "templates")));

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js";
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

class Users extends Model {}
class Tasks extends Model {}

Users.init(
  {
    userName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Users",
  }
);

Tasks.init(
  {
    userName: DataTypes.STRING,
    taskName: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    assignedContractor: DataTypes.STRING,
    scheduled: DataTypes.BOOLEAN,
    date: DataTypes.DATEONLY,
    maxBudget: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Tasks",
  }
);

// login a user
app.post("/loginAttempt", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const username = req.body.username;
  console.log(username);
  const password = req.body.password;
  console.log(password);
  Users.findOne({
    where: {
      userName: username,
    },
  }).then((users) => {
    console.log(users);
    bcrypt.compare(password, users.password, function (err, isMatch) {
      if (err) {
        throw err;
      } else if (!isMatch) {
        console.log("isMatch is False");
        return res.send('{"isMatch": "false"}');
      } else {
        console.log("isMatch is True");
        res.send('{"isMatch": "true"}');
      }
    });
  });
});

// add a user   WORKING
app.post("/users", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (!err) {
        Users.create({
          userName: req.body.userName,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hash,
          location: req.body.location,
          role: req.body.role,
        });
      }
    });
  });
  res.send('{"userRegistered": "true"}');
});

// get all users   WORKING
app.get("/users", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const users = await Users.findAll();
  res.status(200).send(users);
});

// get one user   WORKING
app.get("/users/:username", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  let userName = req.params["username"];
  const users = await Users.findAll({
    where: {
      userName: userName,
    },
  });
  res.status(200).send(users);
});

// update a user   WORKING
app.put("/users/modify/:user_name", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  let userName = req.params["user_name"];
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (!err) {
        Users.update(
          {
            userName: req.body.userName,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            location: req.body.location,
            role: req.body.role,
          },
          {
            where: {
              userName: userName,
            },
          }
        );
      }
      res.send('{"userRegistered": "true"}');
    });
  });
});

// delete a user   WORKING
app.delete("/users/delete/:user_name", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  let userName = req.params["user_name"];
  await Users.destroy({
    where: {
      userName: userName,
    },
  });
  res.send('{"userDeleted": "true"}');
});

// post a new task
app.post("/tasks", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  // const userId = req.params["userName"];
  await Tasks.create(
    {
      taskName: req.body.taskName,
      category: req.body.category,
      description: req.body.description,
      assignedContractor: req.body.assignedContractor,
      scheduled: req.body.scheduled,
      date: req.body.date,
      maxBudget: req.body.maxBudget,
    }.catch((e) => {
      console.log(e);
    })
  );
  return res.send('{"status": "Tasks added!"}');
});

// get all users   WORKING
app.get("/tasks", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const tasks = await Tasks.findAll();
  res.status(200).send(tasks);
});

// get all tasks for current user87bhgv
app.get("/tasks/:user_name", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const userId = req.params["user_name"];
  const allTaskss = await Tasks.findAll({
    where: {
      user_name: userId,
    },
  });
  res.status(200).send(allTaskss);
});

// get one task by date for current user
app.get("/tasks/:user_name/:date_of_task", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const taskrId = req.params["user_name"];
  const dateId = req.params["date_of_task"];
  const taskData = await Tasks.findOne({
    where: {
      user_name: taskrId,
      date_of_task: dateId,
    },
  });

  res.status(200).send(taskData);
});

// delete Tasks
app.delete("/deleteTask", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const user_name = req.body.user_name;
  const location_of_task = req.body.location_of_task;
  Tasks.destroy({
    where: {
      user_name: user_name,
      location_of_task: location_of_task,
    },
  });
  return res.send('{"status": "Task deleted!"}');
});

// Jake Section

// Database work
// export default function Datatable({ data }) {
//   const columns = data[0] && Object.keys(data[0]);
//   return (
//     <table cellPadding={0} cellSpacing={0}>
//       <thead>
//         <tr>
//           {data[0] && columns.map((heading) => <th>{heading}</th>)}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((row) => (
//           <tr>
//             {columns.map((column) => (
//               <td>{row[column]}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
//-------------------------------------------WORKING YELP GET---------------------------------------------//
app.get('/yelp', (req, res) => {
      axios.get('https://api.yelp.com/v3/businesses/search?location=GA',{
      headers:{
        'Authorization':'Bearer mP9UEWzoZ-_Px4TlJdHVmehnpdNfYIuAXtkW7kbwTnKLjgNJ2tYUd2oGBnKxEeyy7EgK3SXn8mIsvvt4l9CTmzZRs6PYKKTtQfyT4wVVWy-SAfp9ypJ_a6F8xTiYYXYx',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }    
    })
    .then(response => {
      console.log(response)
      res.json(response.data)})
});


