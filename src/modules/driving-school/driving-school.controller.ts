import { Body, Controller, Post } from "@nestjs/common";
import { DrivingSchoolService } from "./driving-school.service";

@Controller('schedule')
export class DrivingSchoolController {
  constructor(private readonly drivingSchoolService: DrivingSchoolService) {}

  @Post()
  async createSchedule(@Body() body) {
    return this.drivingSchoolService.create(body);
  }
}