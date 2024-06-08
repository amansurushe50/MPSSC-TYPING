import { Router } from 'express';
import { AuthController } from '@controllers/auth.controller';
import { AuthUserDto } from '@dtos/auth.dto';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { ValidationMiddleware } from '@middlewares/validation.middleware';
import '@middlewares/oauth.middleware';

export class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}signup`, ValidationMiddleware(AuthUserDto), this.auth.signUp);
    this.router.post(`${this.path}login`, ValidationMiddleware(AuthUserDto), this.auth.logIn);
    this.router.get(`${this.path}logout`, AuthMiddleware, this.auth.logOut);
  }
}
