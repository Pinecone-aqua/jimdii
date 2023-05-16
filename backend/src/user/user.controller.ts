import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { CheckToken } from 'src/middleware/checkToken';
import { CheckRole } from 'src/role/role.decorator';
import { CreateUserDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  @Get('login')
  async getUser(@Query() query) {
    try {
      const result = this.userService.checkUser(query);
      return result;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Get('checkToken')
  @CheckRole('ADMIN')
  async tokenChecker() {
    try {
      console.log('token check');
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Patch('editMyDetail')
  @UseGuards(CheckToken)
  async EditUserDetail(
    @Req() req: Request,
    @Body() body: { username: string },
  ) {
    try {
      const result = await this.userService.updateUser(req['user'].id, body);
      if (!result) return 'error';
      const payload = {
        id: result._id,
        username: result.username,
        email: result.email,
        role: result.role,
        phone: result?.phone,
        image: result?.profileImage,
      };
      return { access_token: await this.jwtService.signAsync(payload) };
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Post('register')
  async newUser(@Body() newUser: CreateUserDto) {
    try {
      const result = await this.userService.addUser(newUser);
      return result;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
