const express = require("express");
const routes = require("./routes/index");
const config = require("./config");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Routes
app.use("/", routes);

const PORT = config.Port;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
