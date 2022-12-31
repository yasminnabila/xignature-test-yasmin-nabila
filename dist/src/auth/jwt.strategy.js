"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor() {
        super({
            ignoreExpiration: false,
            secretOrKey: "SECRET",
        });
    }
}
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map