import { Request, Response } from "express";
import log from "../utils/logger";

import { calculateTimeRange } from "../utils/metric.helper";
import {
  createMetric,
  findMetrics,
  findURLMetrics,
} from "../service/metric.service";

async function createMetricHandler(req: Request, res: Response) {
  console.log("-----------------------------");
  console.log("REQUEST BODY   :", req.body);
  console.log("REQUEST HEADER :", req.header);
  console.log("-----------------------------");

  try {
    const metric = await createMetric(req.body);
    return res.send(metric.toJSON());
  } catch (error) {
    log.error(error);
    return res.status(400).send(error.message);
  }
}

// TODO handle any types!
async function getMetricsHandler(req: Request, res: Response) {
  const createdAt = calculateTimeRange(req);

  try {
    log.info("Metrics are searching ...");
    const metrics = await findMetrics({ createdAt });
    console.log(`METRICS RESULT :`, metrics);

    if (!metrics || metrics.toString() === "") {
      log.error("NOT FOUND");
      return res.sendStatus(404);
    }
    return res.send(metrics);
  } catch (error) {
    log.error(error);
    return res.status(400).send(error.message);
  }
}

async function getMetricsByURLHandler(req: Request, res: Response) {
  const createdAt = calculateTimeRange(req);

  try {
    log.info("Metrics are searching ...");
    const metrics = await findURLMetrics({ createdAt });

    console.log(`METRICS RESULT :`, metrics);

    return res.send(metrics);
  } catch (error) {
    log.error(error);
    return res.status(400).send(error.message);
  }
}

export { createMetricHandler, getMetricsHandler, getMetricsByURLHandler };
