import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Inicia a aplicação e define porta de saída.
async function bootstrap() {
  // NestFactory: instância da aplicação iniciada com Express como padrão de framework web HTTP.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
