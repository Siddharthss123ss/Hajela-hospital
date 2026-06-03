import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDepartment extends Document {
  name: string;
  slug: string;
  description: string;
  facilities: string[];
  image_url: string;
  image_id: string;
  is_emergency_dept: boolean;
  order: number;
  // 🔴 Timestamps add karo (recommended)
  createdAt?: Date;
  updatedAt?: Date;
}

const DepartmentSchema = new Schema<IDepartment>(
  {
    name: { 
      type: String, 
      required: [true, 'Department name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    slug: { 
      type: String, 
      required: [true, 'Slug is required'],
      unique: true,
      trim: true,
      lowercase: true,
      index: true // 🔴 Index for faster queries
    },
    description: { 
      type: String, 
      required: [true, 'Description is required'],
      trim: true
    },
    facilities: [{ 
      type: String,
      trim: true
    }],
    image_url: { 
      type: String,
      default: ''
    },
    image_id: { 
      type: String,
      default: ''
    },
    is_emergency_dept: { 
      type: Boolean, 
      default: false,
      index: true // 🔴 For filtering emergency departments
    },
    order: { 
      type: Number, 
      default: 999,
      index: true // 🔴 For sorting
    }
  },
  {
    timestamps: true, // 🔴 Adds createdAt & updatedAt automatically
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// 🔴 Virtual field for formatted name
DepartmentSchema.virtual('displayName').get(function() {
  return this.name.toUpperCase();
});

// 🔴 Index for common queries
DepartmentSchema.index({ slug: 1, is_emergency_dept: 1 });
DepartmentSchema.index({ order: 1, name: 1 });

// 🔴 Pre-save middleware (example: auto-generate slug if not provided)
DepartmentSchema.pre('save', function(next) {
  if (this.isModified('name') && !this.slug) {
    this.slug = this.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  next();
});

// 🔴 Prevent model re-compilation error in development
export const department: Model<IDepartment> = 
  mongoose.models.department || mongoose.model<IDepartment>('department', DepartmentSchema);