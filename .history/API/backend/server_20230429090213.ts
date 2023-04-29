import express from "express";
const cors = require("cors");
import { PORT } from "./utilities/config";
import { connectDB } from "./database/db";

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/journeys?limit=20", require("./routes/actionRoutes"));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}.`));
