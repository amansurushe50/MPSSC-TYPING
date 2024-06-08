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
  public getenglishmockfirst = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/englishmockinstruction.ejs');
    } catch (error) {
      next(error);
    }
  };
  public getmarathimockfirst = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/marathimockinstruction.ejs');
    } catch (error) {
      next(error);
    }
  };
  public getbreakpage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const keystroke = req.params.keystroke;
      const time = req.params.time;
      const url = req.params.url;
      res.render('../src/views/breakpage.ejs', { keystroke: keystroke, time: time, url: url });
    } catch (error) {
      next(error);
    }
  };
  public marathikeyboardtest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/marathikeyboardtest.ejs', { timer: 5 });
    } catch (error) {
      next(error);
    }
  };
  public marathimocktest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/marathimocktest.ejs', { timer: 10 });
    } catch (error) {
      next(error);
    }
  };
  public marathifinaltest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/marathifinaltest.ejs', { timer: 10 });
    } catch (error) {
      next(error);
    }
  };
  public englishmocktest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/englishmocktest.ejs', { timer: 10 });
    } catch (error) {
      next(error);
    }
  };
  public englishfinaltest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/englishfinaltest.ejs', { timer: 1 });
    } catch (error) {
      next(error);
    }
  };
  public englishkeyboardtest = async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.render('../src/views/englishkeyboardtest.ejs', { timer: 5 });
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
