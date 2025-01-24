import { Request,Response } from "express";
import { validationResult } from "express-validator";
import Products from "../models/Products.model";


export const createProducts = async (req:Request, res:Response) => {

  try {
    const product =  await  Products.create(req.body)
    res.json({data: product});
  } catch (error) {
    console.log(error)
  }

 
};
