import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class CheckToken implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const [token] = req.headers.authorization?.split(' ') ?? [];
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
          return res.status(401).json({ message: 'Invalid token' });
        } else {
          req['user'] = decoded;
          next();
        }
      });
    } else {
      return res.status(401).json({ message: 'No token provided' });
    }
  }
}
