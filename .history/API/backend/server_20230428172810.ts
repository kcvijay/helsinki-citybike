import * as express from "express";
require("dotenv").config();

const app = express();

app.listen(`Server is running in port ${process.env.PORT}.`);
