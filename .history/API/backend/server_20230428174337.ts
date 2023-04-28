import express from "express";
import { PORT } from "./utilities/config";
import { connectDB } from "./database/db";

connectDB();

const app = express();

app.use("/api/journeys");

app.listen(PORT, () => console.log(`Server is running at port ${PORT}.`));
