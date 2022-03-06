const express = require("express");
const cors = require("cors");

const router = require("./src/routes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(3000, () => console.log("Server started at port 3000"));
