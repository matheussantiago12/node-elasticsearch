import { Router } from "express";
import UserController from "./controllers/UserController.js";

const route = Router();

route.get("/users", UserController.createIndex);
route.get("/users/:id", UserController.getUser);
route.post("/users", UserController.createUser);
route.put("/users/:id", UserController.update);
route.delete("/users/:id", UserController.delete);
route.post("/users/query", UserController.query);

export default route;
