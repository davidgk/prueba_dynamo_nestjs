import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { APP_WELCOME } from './config/constants';

@Controller()
export class AppController {
  @Get()
  @UseGuards(AuthGuard('jwt'))
  welcome(): string {
    return `<div style="padding: 50px"><h1 >${APP_WELCOME}</h1></br><h3>“Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.” – Antoine de Saint-Exupery<h3></div>`;
  }
}
