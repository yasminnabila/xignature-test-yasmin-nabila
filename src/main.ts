import { NestFactory } from "@nestjs/core";
import { DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Nest API")
    .setDescription("Description of the API")
    .setVersion("1.0")
    .build();

  await app.listen(3000);
}
bootstrap();
