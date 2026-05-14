import mongoose, { Schema, Document } from 'mongoose';

export interface IDoctor extends Document {
  name: string;
  dept_id: mongoose.Types.ObjectId;
  specialization: string;
  degree: string[];
  experience: number;
  about: string;
  awards: string[];
  image_url: string;
  image_id: string;
  available_days: string[];
  start_time: string;
  end_time: string;
  is_active: boolean;
}

const DoctorSchema = new Schema<IDoctor>({
  name: { type: String, required: true },
  dept_id: { type: Schema.Types.ObjectId, ref: 'department', required: true },
  specialization: { type: String, required: true },
  degree: [{ type: String }],
  experience: { type: Number, required: true },
  about: { type: String, required: true },
  awards: [{ type: String }],
  image_url: { type: String },
  image_id: { type: String },
  available_days: [{ type: String }],
  start_time: { type: String },
  end_time: { type: String },
  is_active: { type: Boolean, default: true },
}, { timestamps: true });

export const doctor = mongoose.models.doctor || mongoose.model<IDoctor>('doctor', DoctorSchema);