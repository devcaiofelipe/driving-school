import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScheduleDocument = HydratedDocument<Schedule>;

@Schema()
class Address {
  @Prop()
  postalCode: string;

  @Prop()
  address: string;

  @Prop()
  neighborhood: string;

  @Prop()
  number: number;
  
  @Prop()
  complement: string;
}


@Schema()
export class Schedule {
  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  phone: string[];

  @Prop()
  scheduleDate: string;

  @Prop()
  scheduleAddress: Address;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);