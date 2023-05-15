import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Membership } from './membership.model';
import { MembershipService } from './membership.service';
import { CheckToken } from 'src/middleware/checkToken';

@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Get('getMyMembership')
  @UseGuards(CheckToken)
  async getUserMembership(@Req() req: Request) {
    try {
      console.log(req['user']);

      return this.membershipService.getMembership(req['user'].id);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Post('add')
  @UseGuards(CheckToken)
  createMembership(
    @Body() createMembershipInput: Membership,
    @Req() req: Request,
  ) {
    try {
      return this.membershipService.createMembership(
        createMembershipInput,
        req['user'].id,
      );
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
