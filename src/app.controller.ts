import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //? POST /login
  @Post("login")
  login(): any {
    return {};
  }

  //? GET /protected
  @Get("protected")
  getHello(): string {
    return this.appService.getHello();
  }
}
