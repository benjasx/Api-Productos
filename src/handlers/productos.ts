import { Request, Response } from "express";
import Products from "../models/Products.model";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Products.findAll({
    order: [["id", "DESC"]],
    attributes: { exclude: ["updatedAt", "createdAt", "availability"] },
  });
  res.json({ data: products });
};

export const getProductByID = async (req: Request, res: Response) => {
  const { id } = req.params;
    const product = await Products.findByPk(id);
    if (!product) {
      return res.status(404).json({
        error: "producto no encontrado",
      });
    }
    res.json({ data: product });
};

export const createProducts = async (req: Request, res: Response) => {
  const product = await Products.create(req.body);
  res.status(201).json({ data: product }); // <-- Agrega el status 201 aquí
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
  product.availability = !product.dataValues.availability
  await product.save()
  res.json({data:product})
};


export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Products.findByPk(id);
  if (!product) {
    return res.status(404).json({
      error: "producto no encontrado",
    });
  }

  //ELIMINAR PRODUCTO
  await product.destroy()
  res.json({data: 'Producto Eliminado'})
};