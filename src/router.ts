import { Router } from "express";
import { body, param } from "express-validator";
import {
  createProducts,
  deleteProduct,
  getProductByID,
  getProducts,
  updateAvailability,
  updateProduct,
} from "./handlers/productos";
import { handleInputErrors } from "./middleware";

const router = Router();


/**
 * @swagger
 * components:
 *      schemas:
 *          Product:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The product id
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description: The product name 
 *                      example: Monitor Curvo 49"
 *                  price:
 *                      type: number
 *                      description: The product price 
 *                      example: 300
 *                  availability:
 *                      type: boolean
 *                      description: The product availability 
 *                      example: true
 */

/**
 * @swagger
 * /api/products:
 *      get:
 *          summary: Get a list of products
 *          tags:
 *              - Products
 *          description: Return a list of products
 *          responses:
 *              200: 
 *                  description: Successful response
 *                  content:
 *                       application/json:
 *                            schema:
 *                                type: array
 *                                items:
 *                                  $ref: '#/components/schemas/Product'
 * 
 */
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

router.patch("/:id", 
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  updateAvailability
);

router.put(
  "/:id",
  //Validation
  param("id").isInt().withMessage("ID no válido"),
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

router.delete("/:id", 

  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  deleteProduct
);

export default router;
