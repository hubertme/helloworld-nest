import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import AppConfig from './app_config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    AppConfig.init(app);
    
    await app.listen(process.env.PORT);
}
bootstrap();
