import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DrivingSchoolModule } from './modules/driving-school/driving-school.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://driving-school-database:27017/driving-school'), DrivingSchoolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
