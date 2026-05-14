import mongoose, { Schema, Document } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  email?: string;
  phone: string;
  subject: string;
  message: string;
  isResolved: boolean;
  receivedAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  isResolved: { type: Boolean, default: false },
  receivedAt: { type: Date, default: Date.now },
});

export const Enquiry = mongoose.models.Enquiry || mongoose.model<IEnquiry>('Enquiry', EnquirySchema);