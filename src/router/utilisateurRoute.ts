import express, { Router } from 'express';
import { UserController } from '../controllers/userController';

export class UserRoutes{
    public router: Router;
    private userController: UserController

    constructor() {
        this.router = express.Router();
        this.userController = new UserController;
        this.configRoute();
    }

    private configRoute() {
        this.router.get('/', this.userController.getAll.bind(this.userController));
        this.router.post('/', this.userController.create.bind(this.userController));
        this.router.get('/:id', this.userController.getById.bind(this.userController));
        this.router.put('/:id', this.userController.update.bind(this.userController));
        this.router.delete('/:id', this.userController.delete.bind(this.userController));
    }
}

