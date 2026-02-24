import submissionRoute from "./submission.route";
import express from "express";

const v1Route = express.Router();

v1Route.use("/submit", submissionRoute);

export default v1Route;
