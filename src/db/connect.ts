import mongoose from "mongoose";
import log from "../utils/logger";

function connect() {
  const dbUri = process.env.DB_URI as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("DB error", error);
      process.exit(1);
    });
}

export default connect;
