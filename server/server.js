require("dotenv").config();
const express = require("express");
const configRoutes = require("./routes");

const app = express();
app.use(express.json());

configRoutes(app);

app.listen(3005, () => {
  console.log("Server started on port 3005!");
});
