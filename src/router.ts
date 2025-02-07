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

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *      summary: Get a product by ID
 *      tags:
 *          - Products
 *      description: return a product based on its unique ID
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                           $ref: '#/components/schemas/Product'
 *          404:
 *              description: Product Not found
 *          400:
 *              description: Bad request - Id invalid
 */
router.get(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  getProductByID
);


/**
 * @swagger
 * /api/products:
 *  post:
 *      summary: Creates a new product
 *      tags:
 *          - Products
 *      description: Return a new record in the database
 *      requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                        type: object
 *                        properties:
 *                            name:
 *                                type: string
 *                                example: "Monitor Curvo 49 pulgadas"
 *                            price:
 *                                type: number
 *                                example: 399
 * 
 *      responses:
 *          201:
 *              description: product created successfulluy
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid input data
 * 
 * 
 * 
 * 
 */

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

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *      summary: Update Product availability
 *      tags:
 *          - Products
 *      description: returns the updated avalability
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful Response
 *              content:
 *                  application/json:
 *                      schema:
 *                           $ref: '#/components/schemas/Product'
 *          404:
 *              description: Product Not found
 *          400:
 *              description: Bad request - Id invalid
 */
router.patch(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  updateAvailability
);

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *      summary: Updates a products with user input
 *      tags:
 *          - Products
 *      description: Return the updated product
 *      parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the product to retrieve
 *         required: true
 *         schema:
 *             type: integer
 *      requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                   schema:
 *                        type: object
 *                        properties:
 *                            name:
 *                                type: string
 *                                example: "Monitor Curvo 49 pulgadas"
 *                            price:
 *                                type: number
 *                                example: 399
 *                            availability: 
 *                                type: boolean
 *                                example: true
 *      responses:
 *          200:
 *              description: product created successfulluy
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Product'
 *          400:
 *              description: Bad Request - Invalid Id or invalid inpud data
 *          404:
 *              description: product not found
 */

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
    .isBoolean()
    .withMessage("Valor para dispinibilidad no valido"),
  handleInputErrors,
  updateProduct
);


/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *      summary: Deletes product by Id a given ID
 *      tags:
 *          - Products
 *      description: return a confirmation message
 *      parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to delete
 *          required: true
 *          schema:
 *              type: integer
 *      responses:
 *          200:
 *              description: Successful response
 *              content:
 *                  aplication/json:
 *                      schema: 
 *                          type: string
 *                          value: 'Product deleted'
 *          400:
 *              description: Bad Request
 * 
 *          404:
 *              description: Product not found
 */

router.delete(
  "/:id",

  param("id").isInt().withMessage("ID no válido"),
  handleInputErrors,
  deleteProduct
);

export default router;
