require("dotenv").config();

import express from "express";
import config from "config";
import log from "./utils/logger";
import connect from "./db/connect";
import routes from "./routes";
import cors from "cors";

const app = express();

var corsOptions = {
  origin: "http://127.0.0.1:5500",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

const port = config.get("port") as number;
const host = config.get("host") as string;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);
  connect();
  routes(app);
});
