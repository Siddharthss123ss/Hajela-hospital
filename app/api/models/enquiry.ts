import mongoose, { Schema, Document } from 'mongoose';

export interface IEnquiry extends Document {
  full_name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  created_at: Date;
}

const EnquirySchema = new Schema<IEnquiry>({
  full_name: { 
    type: String, 
    required: [true, "Name is required"] 
  },
  email: { 
    type: String, 
    required: [true, "Email is required"],
    lowercase: true 
  },
  phone: { 
    type: String, 
    required: [true, "Phone number is required"] 
  },
  subject: { 
    type: String, 
    required: true 
  },
  message: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['new', 'read', 'replied'], 
    default: 'new' 
  },
}, { timestamps: true });

EnquirySchema.index({ status: 1, createdAt: -1 });

export const enquiry = mongoose.models.enquiry || mongoose.model<IEnquiry>('enquiry', EnquirySchema);