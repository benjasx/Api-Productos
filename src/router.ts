import { Router } from "express";
import { createProducts } from "./handlers/productos";

const router = Router();

router.get("/", (req, res) => {
  res.json("Desde GET");
});

router.post("/", createProducts );

router.patch("/", (req, res) => {
  res.json("Desde PATCH");
});

router.put("/", (req, res) => {
  res.json("Desde PUT");
});

router.delete("/", (req, res) => {
  res.json("Desde DELETE");
});


export default router