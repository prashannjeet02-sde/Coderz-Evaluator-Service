import { Request, Response, NextFunction } from "express";
// import { submissionDto } from "../dtos/submissionData.dto";
import { ZodSchema } from "zod";

export const validateSubmission =
  <T>(schema: ZodSchema<T>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        ...req.body,
      });
      next();
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: true, message: "Bad Request" });
    }
  };
