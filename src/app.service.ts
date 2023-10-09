import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Purpose: return string
   * @returns 
   */
  getHello(): string {
    return 'Hello World!';
  }
}
