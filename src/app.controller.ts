import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Purpose: For testing purpose only.
   * @returns 
   */
  @Get()
  getHello() {
    return this.appService.getHello()
  }
}
