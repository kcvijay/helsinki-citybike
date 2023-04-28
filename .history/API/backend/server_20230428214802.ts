import express from "express";
import cors from "cors";
import { PORT } from "./utilities/config";
import { connectDB } from "./database/db";

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/journeys", require("./routes/actionRoutes"));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}.`));
