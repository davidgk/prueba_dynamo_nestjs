import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { User, UserKey } from '../models/interfaces/user.interface';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UserKey) {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() user: User) {
    return await this.userService.create(user);
  }

  @Put(':id')
  update(@Param('id') id: UserKey, @Body() user: User) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: UserKey) {
    return this.userService.delete(id);
  }
}
