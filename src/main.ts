import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Cattle io | API Explorer ')
    .setDescription('Cattle.io is realtime iot platform for cattle sensors logging')
    .setVersion('1.0')
    .addTag('cattle, iot, sensor, arduino, wifi, ch4')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('explorer', app, document);

  await app.listen(3000);
}

bootstrap();
