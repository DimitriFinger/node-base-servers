import { Router } from "express";
import UserController from "./controllers/UserController";

const routes = new Router();

routes.get('/users', UserController.getAllUsers);
routes.post('/users', UserController.createUser);

routes.get('/users/:id', UserController.getUser);
routes.put('/users/:id', UserController.updateUser)
routes.delete('/users/:id', UserController.deleteUser);


export default routes;