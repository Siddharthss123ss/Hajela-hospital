import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  icon: string;
  image?: string;
  isEmergency: boolean;
  slug: string;
}

const ServiceSchema = new Schema<IService>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String },
  image: { type: String },
  isEmergency: { type: Boolean, default: false },
  slug: { type: String, required: true, unique: true },
});

export const Service = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);