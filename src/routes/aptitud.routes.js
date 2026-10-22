import { Aptitud } from "express";
import { createTask, getAllTasks } from "../controllers/task.controller.js";

export const aptitudRouter = Router();

// Ruta para crear un usuario
aptitudRouter.post("/aptitud", createAptitud);

// Ruta para traer todos los usuarios
aptitudRouter.get("/aptitud", getAllAptitud);