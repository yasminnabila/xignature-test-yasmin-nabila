import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      ignoreExpiration: false,
      secretOrKey: "SECRET", //! TODO: protect in env var
    });
  }
}
