import { Catch, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Schedule } from "./schemas/schedule.schema";

@Injectable()
export class DrivingSchoolService {
  constructor(@InjectModel(Schedule.name) private catModel: Model<Schedule>) {}
  async create(data) {
    const createdCat = new this.catModel(data);
    return createdCat.save();
  }
}