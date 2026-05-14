import { z } from 'zod';

export const DoctorValidation = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    departmentId: z.string().regex(/^[0-9a-fA-F]{24}$/, "Invalid Department ID format"),
    specialization: z.string().min(2, "Specialization is required"),
    degree: z.array(z.string()).min(1, "At least one degree is required"),
    experience: z.number().min(0, "Experience cannot be negative"),
    about: z.string().min(10, "About section should be descriptive"),
    bio: z.string().optional(),
    image: z.string().url("Invalid image URL").optional().or(z.literal('')),
    isActive: z.boolean().default(true),
});

export const DepartmentValidation = z.object({
    name: z.string().min(2, "Department name is required"),
    description: z.string().optional(),
    icon: z.string().optional(),
});

export const ServiceValidation = z.object({
    title: z.string().min(2, "Title is required"),
    description: z.string().min(10, "Description is too short"),
    icon: z.string().optional(),
    isEmergency: z.boolean().default(false),
    slug: z.string().min(2, "Slug is required"),
});