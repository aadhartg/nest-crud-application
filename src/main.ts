import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap(module) {
  const app = await NestFactory.create(module);
  app.enableCors();
  // Configure Swagger
  const options = new DocumentBuilder()
  .setTitle('Nest example')
  .setDescription('The Nest API description')
  .setVersion('1.0')
  .addTag('Product')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap(AppModule); 