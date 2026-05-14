import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  features: string[]; 
  image_url: string;
  image_id: string;
  is_featured: boolean;
}

const ServiceSchema = new Schema<IService>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  features: [{ type: String }],
  image_url: { type: String },
  image_id: { type: String },
  is_featured: { type: Boolean, default: false },
});

export const service = mongoose.models.service || mongoose.model<IService>('service', ServiceSchema);