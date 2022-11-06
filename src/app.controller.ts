import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PostRequestDto, PostResponseDto } from './utils/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/post')
  post(@Body() request: PostRequestDto): Promise<PostResponseDto> {
    return this.appService.post(request);
  }
}
