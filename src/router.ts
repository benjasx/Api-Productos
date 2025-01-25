import { Router } from "express";
import { body, param } from "express-validator";
import {
  createProducts,
  getProductByID,
  getProducts,
  updateAvailability,
  updateProduct,
} from "./handlers/productos";
import { handleInputErrors } from "./middleware";

const router = Router();

router.get("/", getProducts);
router.get(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  getProductByID
);

router.post(
  "/",
  //Validation
  body("name")
    .notEmpty()
    .withMessage("El nombre de producto no debe estar vacio"),
  body("price")
    .isNumeric()
    .withMessage("Valor no valido")
    .notEmpty()
    .withMessage("El precio de producto no debe estar vacio")
    .custom((value) => value > 0)
    .withMessage("El precio debe ser mayor a 0"),
  handleInputErrors,
  createProducts
);

router.patch("/:id", updateAvailability);

router.put(
  "/:id",
  //Validation
  body("name")
    .notEmpty()
    .withMessage("El nombre de producto no debe estar vacio"),
  body("price")
    .isNumeric()
    .withMessage("Valor no valido")
    .notEmpty()
    .withMessage("El precio de producto no debe estar vacio")
    .custom((value) => value > 0)
    .withMessage("El precio debe ser mayor a 0"),
  body("availability")
  .isBoolean().withMessage('Valor para dispinibilidad no valido'),
  handleInputErrors,
  updateProduct
);

router.delete("/", (req, res) => {
  res.json("Desde DELETE");
});

export default router;
