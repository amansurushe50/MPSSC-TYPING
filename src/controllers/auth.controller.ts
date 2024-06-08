import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import { AuthService } from '@services/auth.service';

export class AuthController {
  public auth = Container.get(AuthService);

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const signUpUserData: User = await this.auth.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.body;
      const data: any = await this.auth.login(userData);
      if (data.cookie && data.findUser && data.tokenData) {
        res.setHeader('Set-Cookie', [data.cookie]);
        req.session.user = data.findUser;
        req.session.tokenData = data.tokenData;
        res.redirect('/english');
      } else {
        res.render('../src/views/login', { message: data.message });
      }
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.auth.logout(userData);
      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.redirect('/login');
    } catch (error) {
      next(error);
    }
  };
}
