import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: "https://yadetout-client.vercel.app",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    });
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
        .addBearerAuth()
        .setTitle("Yadetout API")
        .setDescription("Yadetout API")
        .setVersion("1.0")
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("api", app, document);

    await app.listen(3001);
}
bootstrap();
