import { Request,Response } from "express";

export const createProducts = (req:Request, res:Response) => {
  res.json("Desde POST");
};
