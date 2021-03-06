require("dotenv").config();

import express from "express";
import log from "./utils/logger";
import connect from "./db/connect";
import routes from "./routes";
import cors from "cors";

const PORT: string | number = process.env.PORT || 5000;
const HOST: string =
  process.env.PORT === `6060`
    ? `http://localhost:${PORT}`
    : "https://perfanalytics-api-ht.herokuapp.com/api/";

const app = express();

const allowedOrigins = [
  "http://127.0.0.1:5500",
  "http://127.0.0.1:5502",
  "http://localhost:3000",
  "https://hasantezcan.github.io",
  "https://react-metrics.netlify.app",
  "https://penguins-metrics.netlify.app",
  "https://random-metrics.netlify.app",
];

var corsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  log.info(`Server listing at ${HOST}`);
  connect();
  routes(app);
});
