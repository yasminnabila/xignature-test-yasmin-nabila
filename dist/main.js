"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("Nest API")
        .setDescription("Description of the API")
        .setVersion("1.0")
        .build();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map