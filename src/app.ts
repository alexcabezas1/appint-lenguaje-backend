import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import lusca from "lusca";
import mongoose from "mongoose";
import bluebird from "bluebird";
import errorHandler from "errorhandler";
import getConfig from "./utils/config";
import router from "./routes";
import cors from "cors";
mongoose.Promise = bluebird;

const config = getConfig();
const node_env = config.get("node_env");
const app: express.Application = express();
const mongoUrl =
  config.get("mongodb:url") + "/" + config.get("mongodb:database");

const mongoOpts = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  w: "majority",
  retryWrites: true,
};

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  exposedHeaders: "x-access-token",
};

mongoose
  .connect(mongoUrl, mongoOpts)
  .then(() => {
    console.log("Connected to the MongoDB database");
  })
  .catch((e) => {
    console.log("Cannot connect to the MongoDB database");
    console.log(e);
  });

app.set("port", config.get("app:port"));
app.use(cors(corsOptions));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

if (node_env === "development") {
  app.use(errorHandler());
}

app.use(router);

app.get("/", function (_, res) {
  res.send("Hello World");
});

export default app;
