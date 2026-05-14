import mongoose, { Schema, Document } from 'mongoose';

export interface IDepartment extends Document {
  name: string;
  slug: string;
  description: string;
  facilities: string[];
  image_url: string;
  image_id: string;
  is_emergency_dept: boolean;
}

const DepartmentSchema = new Schema<IDepartment>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  facilities: [{ type: String }],
  image_url: { type: String },
  image_id: { type: String },
  is_emergency_dept: { type: Boolean, default: false },
});

export const department = mongoose.models.department || mongoose.model<IDepartment>('department', DepartmentSchema);