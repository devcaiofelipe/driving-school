import { Module } from "@nestjs/common";
import { DrivingSchoolController } from "./driving-school.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Schedule, ScheduleSchema } from "./schemas/schedule.schema";
import { DrivingSchoolService } from "./driving-school.service";


@Module({
  imports: [MongooseModule.forFeature([{ name: Schedule.name, schema: ScheduleSchema }])],
  controllers: [DrivingSchoolController],
  providers: [DrivingSchoolService],
})
export class DrivingSchoolModule {}
