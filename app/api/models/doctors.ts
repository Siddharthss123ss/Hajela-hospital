import mongoose, { Schema, Document } from 'mongoose';

export interface IDoctor extends Document {
  name: string;
  departmentId: mongoose.Types.ObjectId;
  specialization: string;
  degree: string[];
  experience: number;
  about: string;
  bio: string;
  image: string;
  isActive: boolean;
}

const DoctorSchema = new Schema<IDoctor>({
  name: { type: String, required: true },
  departmentId: { type: Schema.Types.ObjectId, ref: 'Department', required: true },
  specialization: { type: String, required: true },
  degree: [{ type: String }],
  experience: { type: Number, required: true },
  about: { type: String, required: true },
  bio: { type: String },
  image: { type: String },
  isActive: { type: Boolean, default: true },
});

export const Doctor = mongoose.models.Doctor || mongoose.model<IDoctor>('Doctor', DoctorSchema);