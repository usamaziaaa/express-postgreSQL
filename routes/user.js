const express = require("express");
const { fetchUsers, fetchUserById, addNewUser } = require("../controllers/user");

const router = express.Router();

// Routes
router.get("/", fetchUsers);
router.get("/:id", fetchUserById);
router.post("/", addNewUser);

module.exports = router;
