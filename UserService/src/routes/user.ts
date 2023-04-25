import express from "express";
import UserController from "../controllers/user";

const router = express.Router();

router.get("/users/:id", async (req, res) => {
  if (req.params.id) {
    const user = await UserController.findUserById({
      id: req.params.id as string,
    });

    if (user) {
      return res.json(user);
    }

    return res.status(404).json({ message: "User not found!" });
  }

  const users = await UserController.findAllUsers();
  return res.json(users);
});

router.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await UserController.updateUserById({
      id: req.params.id,
      fields: { ...req.body.fields },
    });

    return res.json(updatedUser);
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong", error });
  }
});

export { router };
