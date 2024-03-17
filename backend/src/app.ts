import express from "express";
import customers from "./routers/customers/index";
const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());
app.use("/customers", customers);

export default app;
