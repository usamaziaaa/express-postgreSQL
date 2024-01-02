const pool = require("../db");
const HttpStatus = require("../constants");

const fetchUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(HttpStatus.SERVER_ERROR).send("Internal Server Error");
  }
};

const fetchUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await pool.query(
      `SELECT * FROM users where id = ${id} LIMIT 1`
    );
    if (result.rowCount) {
      res.json(result.rows[0]);
    } else {
      res.status(HttpStatus.NOT_FOUND).send("User not found");
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(HttpStatus.SERVER_ERROR).send("Internal Server Error");
  }
};

const addNewUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUserQuery =
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
  const newUserValues = [name, email, password];

  try {
    const result = await pool.query(newUserQuery, newUserValues);
    res.json(result);
  } catch (error) {
    console.error("Error inserting data:", error.message);
    res.status(HttpStatus.SERVER_ERROR).json({ message: error.message });
  }
};

module.exports = {
  fetchUsers,
  fetchUserById,
  addNewUser,
};
