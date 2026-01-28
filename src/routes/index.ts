import express from "express";
import sampleRouter from "./v1";

const v1Router = express.Router();

v1Router.use("/v1", sampleRouter);

export default v1Router;
