import express, { request } from "express";
import { USERS } from "./users";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
// write your code here

app.get("/users", (req, res) => {
  try {
    res.send(USERS.users).status(200);
  } catch (error) {
    res.status(404).send(error);
  }
});

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

app.post("/user", (req, res) => {
  try {
    const user = USERS.users.find((user) => user.id === req.body.id);
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
      res.status(409).send("USer Already Exists");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete("/user/:id", (req, res) => {
  try {
    const user = USERS.users.find((user) => user.id === Number(req.params.id));
    if (user) {
      const ilength = USERS.users.length;
      USERS.users = USERS.users.filter(
        (user) => user.id !== Number(req.params.id)
      );
      const ulength = USERS.users.length;
      if (ulength < ilength) {
        res.status(200).send("User");
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

app.put("/user/:id", (req, res) => {
  try {
    const index = USERS.users.findIndex(
      (user) => user.id === Number(req.params.id)
    );
    if (index >= 0) {
      console.log(index);
      USERS.users[index] = { id: req.body.id, name: req.body.name };
      res.status(200).send("Updated");
    } else {
      res.status(404).send("User not found");
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
