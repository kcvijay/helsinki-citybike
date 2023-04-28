console.log("Server is runningrs");
import * as express from "express";
import env from "dotenv";

const app = express();

app.listen(`Server is running in port ${process.env.PORT}.`);
