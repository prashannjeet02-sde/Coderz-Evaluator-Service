import express from "express";

import { sampleRequest } from "../../controller/sample.controller";

const sampleRouter = express.Router();

sampleRouter.get("/sample", sampleRequest);

export default sampleRouter;
