import { submitCode } from "../../controller/submission.controller";
import express from "express";
import { validateSubmission } from "../../validator/submission.validator";
import { submissionData } from "../../dtos/submissionData.dto";

const submissionRoute = express.Router();

submissionRoute.post("/", validateSubmission(submissionData), submitCode);

export default submissionRoute;
