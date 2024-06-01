import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, RequestWithUser } from '@interfaces/auth.interface';
import { UserModel } from '@models/users.model';

const getAuthorization = req => {
  const cookie = req.cookies['Authorization']; // Corrected the typo
  if (cookie) return cookie;

  const header = req.header('Authorization');
  if (header) return header.split('Bearer ')[1];

  return null;
};

export const AuthMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const authorization = getAuthorization(req); // Renamed to lowercase for consistency
    if (authorization) {
      const { _id } = (await verify(authorization, SECRET_KEY)) as DataStoredInToken; // Added "as DataStoredInToken" for TypeScript casting
      const findUser = await UserModel.findById(_id);

      if (findUser) {
        req.user = findUser;
        next(); // Changed to call next without arguments
      } else {
        res.redirect('/login');
        throw new HttpException(401, 'Wrong authentication token'); // Throw an error explicitly
      }
    } else {
      res.redirect('/login');
      throw new HttpException(404, 'Authentication token missing'); // Throw an error explicitly
    }
  } catch (error) {
    console.error(error); // Log the error
    next(new HttpException(401, 'Wrong authentication token'));
  }
};
