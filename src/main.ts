import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mqtt = app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      options: {
        host: 'test.mosquitto.org',
        port: 1883,
      },
    },
  } as any);

  await app.listen(3000);
  await mqtt.listen(() => console.log('Microservice is listening...'));
}
bootstrap();
