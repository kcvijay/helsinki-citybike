import * as express from "express";

const app = express();

app.listen(`Server is running in port ${process.env.PORT}.`);
