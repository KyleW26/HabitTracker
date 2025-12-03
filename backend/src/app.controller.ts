import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { User as UserModel } from './generated/prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: UsersService) {}

  @Post('user')
  async signupUser(
    @Body() userData: { name?: string; email: string },
  ): Promise<UserModel> {
    return await this.userService.createUser(userData);
  }
}
