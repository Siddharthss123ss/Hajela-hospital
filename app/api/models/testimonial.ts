import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
  patientName: string;
  feedback: string;
  rating: number;
  treatmentReceived?: string;
  isFeatured: boolean;
}

const TestimonialSchema = new Schema<ITestimonial>({
  patientName: { type: String, required: true },
  feedback: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  treatmentReceived: { type: String },
  isFeatured: { type: Boolean, default: false },
});

export const Testimonial = mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);