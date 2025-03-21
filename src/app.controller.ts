import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import type { AnagramRequestData } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/AnagramSolver/:word')
  getAnagram(@Param('word') word: string): AnagramRequestData {
    return this.appService.getAnagram(word);
  }
}
