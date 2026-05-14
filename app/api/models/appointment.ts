import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  patient_name: string;
  patient_phone: string;
  patient_email: string;
  doctor_id: mongoose.Types.ObjectId;
  dept_id: mongoose.Types.ObjectId;
  appointment_date: Date;
  time_slot: string;
  reason: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

const AppointmentSchema = new Schema<IAppointment>({
  patient_name: { type: String, required: true },
  patient_phone: { type: String, required: true },
  patient_email: { type: String },
  doctor_id: { type: Schema.Types.ObjectId, ref: 'doctor', required: true },
  dept_id: { type: Schema.Types.ObjectId, ref: 'department', required: true },
  appointment_date: { type: Date, required: true },
  time_slot: { type: String, required: true },
  reason: { type: String },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed'], default: 'pending' },
}, { timestamps: true });

export const appointment = mongoose.models.appointment || mongoose.model<IAppointment>('appointment', AppointmentSchema);