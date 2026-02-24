import v1Route from "./v1";
import express from "express";

const finalRoute = express.Router();

finalRoute.use("/v1", v1Route);

export default finalRoute;
