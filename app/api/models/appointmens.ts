import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  patientName: string;
  phoneNumber: string;
  doctorId: mongoose.Types.ObjectId;
  appointmentDate: Date;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
}

const AppointmentSchema = new Schema<IAppointment>({
  patientName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  appointmentDate: { type: Date, required: true },
  timeSlot: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'cancelled', 'completed'], 
    default: 'pending' 
  },
  notes: { type: String },
}, { timestamps: true });

export const Appointment = mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);