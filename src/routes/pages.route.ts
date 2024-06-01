import { Router } from 'express';
import { PagesController } from '@controllers/pages.controller';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@/middlewares/auth.middleware';

export class PageRoute implements Routes {
  public path = '/';
  public router = Router();
  public pages = new PagesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}english`, AuthMiddleware, this.pages.getEnglish);
    this.router.get(`${this.path}marathi`, AuthMiddleware, this.pages.getMarathi);
    this.router.get(`${this.path}profile`, AuthMiddleware, this.pages.getProfile);
    this.router.get(`${this.path}login`, this.pages.getLogin);
    this.router.get(`${this.path}forgot`, this.pages.getForgot);
    this.router.get(`${this.path}register`, this.pages.getRegister);
    this.router.get(`${this.path}reset`, this.pages.getreset);
    this.router.get(`${this.path}`, this.pages.getlanding);
  }
}
