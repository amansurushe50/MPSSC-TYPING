import { NextFunction, Request, Response } from 'express';

export class PagesController {
  //public user = Container.get(UserService);

  public getEnglish = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userdata = req.session.user;
      if (!userdata) {
        res.redirect('/login');
      } else {
        res.render('../src/views/main', { user: userdata });
      }
    } catch (error) {
      next(error);
    }
  };

  public getMarathi = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userdata = req.session.user;
      if (!userdata) {
        res.redirect('/login');
      } else {
        res.render('../src/views/mainmarathi.ejs', { user: userdata });
      }
    } catch (error) {
      next(error);
    }
  };
  public getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userdata = req.session.user;
      if (!userdata) {
        res.redirect('/login');
      } else {
        res.render('../src/views/profile.ejs', { user: userdata });
      }
    } catch (error) {
      next(error);
    }
  };
  public getLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/login.ejs', { message: false });
    } catch (error) {
      next(error);
    }
  };
  public getForgot = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/forgot.ejs');
    } catch (error) {
      next(error);
    }
  };
  public getmockinstructionpage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/mockinstruction.ejs');
    } catch (error) {
      next(error);
    }
  };
  public getmockfirst = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/mocktestfirstpage.ejs');
    } catch (error) {
      next(error);
    }
  };
  public getbreakpage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/breakpage.ejs');
    } catch (error) {
      next(error);
    }
  };
  public getRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/register.ejs', { message: false });
    } catch (error) {
      next(error);
    }
  };
  public getreset = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/reset.ejs');
    } catch (error) {
      next(error);
    }
  };
  public getlanding = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/index.ejs');
    } catch (error) {
      next(error);
    }
  };
}
