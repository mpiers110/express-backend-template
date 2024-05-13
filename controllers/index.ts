import { NextFunction, Request, Response } from "express";
import HttpError from "../models/http-error";

export async function main(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({ message: "Server is Up and running" });
  } catch (err) {
    console.log(err);
    return next(
      new HttpError("An error occurred while initializing the server")
    );
  }
}
