import express from "express";
import { PORT } from "./utilities/config";
import { connectDB } from "./database/db";

connectDB();

const app = express();
app.use(express.json());

app.use("/api/journeys", require("./routes/actionRoutes"));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}.`));
