import { Request,Response } from "express";
import Products from "../models/Products.model";

export const createProducts = async (req:Request, res:Response) => {
  const product = new Products(req.body)
  product.save()
  res.json("Desde POST");
};
