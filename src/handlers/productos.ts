import { Request, Response } from "express";
import Products from "../models/Products.model";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Products.findAll({
      order: [["id", "DESC"]],
      attributes: { exclude: ["updatedAt", "createdAt", "availability"] },
      //limit:2
    });
    res.json({ data: products });
  } catch (error) {
    console.log(error);
  }
};

export const getProductByID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({
        error: "producto no encontrado",
      });
    }
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const createProducts = async (req: Request, res: Response) => {
  try {
    const product = await Products.create(req.body);
    res.json({ data: product });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Products.findByPk(id);
  if (!product) {
    return res.status(404).json({
      error: "producto no encontrado",
    });
  }

  //ACTUALIZAR PRODUCTO
  await product.update(req.body)
  await product.save()
  res.json({data:product})
};


export const updateAvailability = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Products.findByPk(id);
  if (!product) {
    return res.status(404).json({
      error: "producto no encontrado",
    });
  }

  //ACTUALIZAR PRODUCTO
  await product.update(req.body)
  await product.save()
  res.json({data:product})
};