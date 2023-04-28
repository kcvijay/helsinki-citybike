console.log("Server is runningrs");
import express from "express";
import env from "dotenv";

const app = express();

app.listen(`Server is running in port ${process.env.PORT}.`);
