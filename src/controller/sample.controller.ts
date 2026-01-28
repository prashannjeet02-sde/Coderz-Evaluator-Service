import { Request, Response } from "express";

export const sampleRequest = (_: Request, res: Response) => {
  return res
    .status(200)
    .json({ success: "OK", message: "Sample controller test Successful" });
};
