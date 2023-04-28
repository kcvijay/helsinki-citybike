console.log("Server is runningrs");
import express from "express";
import env from "dotenv";

const app = express();

app.listen(`Server is runnint in port ${process.env.PORT}`);
