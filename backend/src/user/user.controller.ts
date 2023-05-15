import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
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
      return err;
    }
  }

  @Patch('editMyDetail')
  @UseGuards(CheckToken)
  async EditUserDetail(
    @Req() req: Request,
    @Body() body: { username: string },
    @Res() res: Response,
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
      const token = this.jwtService.sign(payload);

      // res
      //   .status(200)
      //   .cookie('token', token)
      //   .redirect(`http://localhost:${process.env.CLIENT_PORT}`);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  // @Post('register')
  // async newUser(@Body() newUser: CreateUserDto) {
  //   try {
  //     const result = await this.userService.addUser(newUser);
  //     return result;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // @Patch('edit')
  // async editUser(@Body() editedUser) {
  //   try {
  //     const result = await this.userService.editUser(editedUser);
  //     return result;
  //   } catch (err) {}
  // }
}
