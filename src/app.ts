require("dotenv").config();

import express from "express";
import log from "./utils/logger";
import connect from "./db/connect";
import routes from "./routes";
import cors from "cors";

const app = express();
const path = require("path");

var corsOptions = {
  origin: ["http://127.0.0.1:5500", "http://localhost:3000"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve perfAnalyticsJs package
app.use(
  "/perfAnalyticsJs",
  express.static(path.join(__dirname, "public/perfAnalyticsJs.js"))
);

const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, () => {
  log.info(`Server listing at http://localhost:${PORT}`);
  connect();
  routes(app);
});
