import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CarsModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
