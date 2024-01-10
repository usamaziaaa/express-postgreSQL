const express = require("express");
const {
  fetchUsers,
  fetchUserById,
  addNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const router = express.Router();

// Routes
router.get("/", fetchUsers);
router.get("/:id", fetchUserById);
router.post("/", addNewUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
