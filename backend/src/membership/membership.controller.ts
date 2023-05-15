import { Body, Controller, Post } from '@nestjs/common';
import { Membership } from './membership.model';
import { MembershipService } from './membership.service';

@Controller('membership')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @Post('add')
  createMembership(@Body() createMembershipInput: Membership) {
    try {
      return this.membershipService.createMembership(createMembershipInput);
    } catch (error) {
      return error.message;
    }
  }
}
