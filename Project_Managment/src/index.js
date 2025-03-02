import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend to access backend
app.use(express.json()); // Enable JSON parsing

// Sample API route
app.get("/api/projects", (req, res) => {
  res.json([
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
  ]);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
