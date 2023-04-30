import express from "express";
const cors = require("cors");
import { PORT } from "./utilities/config";
import { connectDB } from "./database/db";

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// app.use("/api/journeys", require("./routes/journeyRoutes"));
// app.use("/api/stations", require("./routes/journeyRoutes"));

const router = express.Router();

const { getAllData, getData } = require("../controllers/journeyController");

router
  .route("/journeys")
  .get((req: Request, res: Response) => getAllData(req, res, "journeys"));

router
  .route("/stations")
  .get((req: Request, res: Response) => getAllData(req, res, "stations"));

router
  .route("/journeys/:id")
  .get((req: Request, res: Response) => getData(req, res, "journeys"));

router
  .route("/stations/:id")
  .get((req: Request, res: Response) => getData(req, res, "stations"));

module.exports = router;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}.`));
