import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import LoggerMiddleware from 'middlewares/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AppConfig from './app_config';
import { CatsModule } from './cats/cats.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: AppConfig.envFilePath,
		}),
		CatsModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('/cats');
	}
}
