import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { AuthenticatedGuard } from "./auth/authenticated.guard";
import { LocalAuthGuard } from "./auth/local-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthenticatedGuard)
  @Get("protected")
  getHello(@Request() req): string {
    //? TODO: require a token, validate token
    return req.user;
  }
}
