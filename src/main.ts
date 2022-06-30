import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
  .setTitle('Login/Register with jwt API ')
  .setDescription('back & front : reactjs&nestjs')
  .setVersion ('1.0')
  .build();
  const document = SwaggerModule.createDocument (app, config);
  SwaggerModule.setup('/', app, document);
  
  await app.listen(8000);
}
bootstrap();
