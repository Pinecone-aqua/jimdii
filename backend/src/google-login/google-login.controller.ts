import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Request as Req,
  Response as Res,
} from '@nestjs/common';
import * as queryString from 'query-string';
import { Request, Response } from 'express';
import { getAccessTokenFromCode } from './getAccessTokenFromCode';
import { getGoogleUserInfo } from './getGoogleUserInfo';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.model';
import * as moment from 'moment';

@Controller()
export class GoogleLoginController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  @Get('google-login')
  googleLogin() {
    console.log('google-login');

    const stringifiedParams = queryString.stringify({
      client_id: process.env.CLIENT_ID,
      redirect_uri: `${process.env.BACKEND_URL}/google/callback`,
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ].join(' '),
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent',
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
  }

  @Get('google/callback')
  async verifyGoogle(@Req() req: Request, @Res() res: Response) {
    const { code } = req.query;

    console.log('google callback');

    if (!code) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    const accessToken = await getAccessTokenFromCode(code);
    if (!accessToken)
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    const profile: any = await getGoogleUserInfo(accessToken);

    let user = await this.userService.findByEmail(profile.email);

    if (!user) {
      const userInput: User = {
        email: profile.email,
        username: profile.name,
        profileImage: profile.picture,
        password: null,
        address: null,
        gender: null,
        birthdate: null,
        createdDate: moment().format('LLLL'),
        phone: null,
        role: 'CLIENT',
      };
      user = await this.userService.createUser(userInput);
    }

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      phone: user?.phone,
      image: user?.profileImage,
    };
    const token = this.jwtService.sign(payload);

    console.log('token', token);

    if (user.role === 'CLIENT') {
      res
        .cookie('token', token, { httpOnly: true, secure: true })
        .redirect(`${process.env.CLIENT_PORT}`);
    } else {
      res
        .cookie('aToken', token, { httpOnly: true, secure: true })
        .redirect(`${process.env.ADMIN_PORT}`);
    }
  }
}
