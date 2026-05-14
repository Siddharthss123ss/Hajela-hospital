import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  patient_name: string;
  rating: number;
  comment: string;
  doctor_id?: mongoose.Types.ObjectId;
  is_approved: boolean;
}

const ReviewSchema = new Schema<IReview>({
  patient_name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  doctor_id: { type: Schema.Types.ObjectId, ref: 'doctor' },
  is_approved: { type: Boolean, default: false },
}, { timestamps: true });

export const review = mongoose.models.review || mongoose.model<IReview>('review', ReviewSchema);