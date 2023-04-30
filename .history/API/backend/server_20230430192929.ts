import express from "express";
const cors = require("cors");
import { PORT } from "./utilities/config";
import { connectDB } from "./database/db";

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/journeys", require("./routes/journeyRoutes"));
app.use("/api/stations", require("./routes/journeyRoutes"));

app.listen(PORT, () => console.log(`Server is running at port ${PORT}.`));
