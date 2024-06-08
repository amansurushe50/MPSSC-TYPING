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
    this.router.get(`${this.path}mockinstruction`, this.pages.getmockinstructionpage);
    this.router.get(`${this.path}mock/english/instruction`, this.pages.getenglishmockfirst);
    this.router.get(`${this.path}mock/marathi/instruction`, this.pages.getmarathimockfirst);
    this.router.get(`${this.path}breakpage/:keystroke/:time/:url`, this.pages.getbreakpage);
    this.router.get(`${this.path}mock/english/keyboard`, this.pages.englishkeyboardtest);
    this.router.get(`${this.path}mock/marathi/keyboard`, this.pages.marathikeyboardtest);
    this.router.get(`${this.path}mock/marathimocktest`, this.pages.marathimocktest);
    this.router.get(`${this.path}mock/marathifinaltest`, this.pages.marathifinaltest);
    this.router.get(`${this.path}mock/englishmocktest`, this.pages.englishmocktest);
    this.router.get(`${this.path}mock/englishfinaltest`, this.pages.englishfinaltest);
    this.router.get(`${this.path}register`, this.pages.getRegister);
    this.router.get(`${this.path}reset`, this.pages.getreset);
    this.router.get(`${this.path}`, this.pages.getlanding);
  }
}
