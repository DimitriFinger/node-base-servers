import { Router } from "express";
import UsersController from "./controllers/UsersController";

const routes = new Router();

routes.get('/users', UsersController.getAll);
routes.post('/users', UsersController.create);

routes.get('/users/:id', UsersController.getId);
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.delete);


export default routes;