import { Request, Response } from "express";
import { submissionDto } from "../dtos/submissionData.dto";

export function submitCode(req: Request, res: Response) {
  const submitData = req.body as submissionDto;

  return res
    .status(201)
    .json({ success: true, message: "Code submitted", data: submitData });
}
