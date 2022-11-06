import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { GetUriResponseDto, PostRequestDto, ResponseDto } from './utils/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/post')
  post(@Body() request: PostRequestDto): Promise<ResponseDto> {
    return this.appService.post(request);
  }

  @Post('/collect')
  collect(): Promise<ResponseDto> {
    return this.appService.collect();
  }

  @Get('/image')
  getImage(): Promise<GetUriResponseDto> {
    return this.appService.getImage();
  }

  @Get('/nft')
  getNft(): Promise<GetUriResponseDto> {
    return this.appService.getNft();
  }
}
