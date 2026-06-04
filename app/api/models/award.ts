import mongoose, { Schema, Document, Model } from "mongoose";

// 🔴 Interface for TypeScript
export interface IAward extends Document {
  title: string;
  description: string;
  image_url: string;
  image_id: string;
  year: string;
  category: "trophy award" | "certifications";
  order: number;  // 🔴 ADD THIS FIELD
  createdAt?: Date;
  updatedAt?: Date;
}

const awardSchema = new Schema<IAward>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    image_url: {
      type: String,
      required: [true, 'Image URL is required'],
      trim: true,
    },
    image_id: {
      type: String,
      required: [true, 'Image ID is required'],
      trim: true,
      unique: true,
    },
    year: {
      type: String,
      required: [true, 'Year is required'],
      trim: true,
      validate: {
        validator: function(v: string) {
          return /^\d{4}$/.test(v);
        },
        message: 'Year must be a valid 4-digit year (e.g., 2024)'
      },
      index: true,
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: {
        values: ["trophy award", "certifications"],
        message: 'Category must be either "trophy award" or "certifications"'
      },
      index: true,
    },
    // 🔴 ADD ORDER FIELD HERE
    order: {
      type: Number,
      default: 999,
      index: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// 🔴 Compound indexes
awardSchema.index({ year: -1, category: 1 });
awardSchema.index({ category: 1, year: -1 });
awardSchema.index({ order: 1, year: -1 }); // 🔴 ADD THIS for sorting

// 🔴 Virtual field for formatted display
awardSchema.virtual('displayTitle').get(function() {
  return `${this.title} (${this.year})`;
});

// 🔴 Static method to get years
awardSchema.statics.getAvailableYears = function() {
  return this.distinct('year').sort({ year: -1 });
};

// 🔴 Static method to get by category (sorted by order)
awardSchema.statics.findByCategory = function(category: string) {
  return this.find({ category }).sort({ order: 1, year: -1 }).lean();
};

// 🔴 Static method to get all sorted by order
awardSchema.statics.findAllSorted = function() {
  return this.find({}).sort({ order: 1, year: -1 }).lean();
};

// 🔴 Prevent model re-compilation error
export const Award: Model<IAward> =
  mongoose.models.Award || mongoose.model<IAward>("Award", awardSchema);