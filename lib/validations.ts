import { z } from 'zod';

// 1. Doctor Validation
export const doctor_schema = z.object({
  name: z.string().min(1, "Name is required"),
  dept_id: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Department ID"),
  specialization: z.string().min(1, "Specialization is required"),
  degree: z.array(z.string()),
  experience: z.number().min(0),
  about: z.string().min(10),
  available_days: z.array(z.string()),
  start_time: z.string(),
  end_time: z.string(),
  image_url: z.string().optional(),
  image_id: z.string().optional(),
});

// 2. Appointment Validation
export const appointment_schema = z.object({
  patient_name: z.string().min(1),
  patient_phone: z.string().min(10).max(10),
  doctor_id: z.string().regex(/^[0-9a-fA-F]{24}$/),
  dept_id: z.string().regex(/^[0-9a-fA-F]{24}$/),
  appointment_date: z.string(), // ISO string format
  time_slot: z.string(),
  reason: z.string().optional(),
});

// 3. Review Validation
export const review_schema = z.object({
  patient_name: z.string().min(1),
  rating: z.number().min(1).max(5),
  comment: z.string().min(5),
  doctor_id: z.string().regex(/^[0-9a-fA-F]{24}$/).optional(),
});

// --- Generic Validator Function ---
export const validate_data = (schema: z.ZodSchema, data: any): boolean => {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error("Validation Error Details:", result.error.format());
    return false;
  }
  return true;
};