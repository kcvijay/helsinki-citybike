import express from "express";
import { PORT } from "./utilities/config";

const app = express();

app.listen(PORT, () => console.log(`Server is running at port ${PORT}.`));
