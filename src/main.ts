import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // whiteList 없으면 Error 반환
      transform: true, // 요청한 데이터타입으로 변환시켜줌.
    }),
  );
  await app.listen(3000);
}
bootstrap();
