import mongoose from "mongoose";

const awardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    image_id: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["trophy award", "certifications"],
    },
  },
  {
    timestamps: true,
  }
);

export const Award =
  mongoose.models.Award || mongoose.model("Award", awardSchema);