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
      console.log(err);
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
