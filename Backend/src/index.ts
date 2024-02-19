import express, { request } from "express";
import { USERS } from "./users";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
// write your code here

// **** get all Users

app.get("/users", (req, res) => {
  try {
    res.send(USERS.users).status(200);
  } catch (error) {
    res.status(404).send(error);
  }
});

// **** get a User

app.get("/user/:id", (req, res) => {
  try {
    const user = USERS.users.find((user) => user.id === Number(req.params.id));
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// **** create a User

app.post("/user", (req, res) => {
  try {
    // it takes user obj from arr which satisfies the condition
    const user = USERS.users.find((user) => user.id === req.body.id);
    // if the user contains an obj i.e the user not found then we will create  a new obj and push it into the arr
    if (!user) {
      const ilength = USERS.users.length;
      USERS.users.push({ id: req.body.id, name: req.body.name });
      const ulength = USERS.users.length;
      if (ulength > ilength) {
        res.status(200).send("User Created");
      } else {
        res.status(404).send("User Not created");
      }
    } else {
      res.status(409).send("User Already Exists");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// *** delete a user

app.delete("/user/:id", (req, res) => {
  try {
    //  check wether the user is in the arr or not
    const user = USERS.users.find((user) => user.id === Number(req.params.id));

    // if user found then filter the arr by the obj whose id matches the req id
    if (user) {
      const ilength = USERS.users.length;
      USERS.users = USERS.users.filter(
        (user) => user.id !== Number(req.params.id)
      );
      const ulength = USERS.users.length;
      if (ulength < ilength) {
        res.status(200).send("User Deleted!");
      } else {
        res.status(404).send("User Can't Delete!");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

// ***** update a user info from id

app.put("/user/:id", (req, res) => {
  try {
    //  get the index of the user obj whose data need to be updated
    const index = USERS.users.findIndex(
      (user) => user.id === Number(req.params.id)
    ); // will return any index if found else return -1

    if (index >= 0) {
      // console.log(index)
      // assign new object
      USERS.users[index] = { id: req.body.id, name: req.body.name };
      res.status(200).send("Updated");
    } else {
      res.status(401).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

// stop here

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
