import mongoose, { Document, Schema } from "mongoose";

export interface IGallery extends Document {
  title: string;
  category: "event" | "news" | "videos";
  image_url: string;
  image_id: string;
  createdAt: Date;
  updatedAt: Date;
}

const GallerySchema = new Schema<IGallery>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["event", "news", "videos"],
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
  },
  {
    timestamps: true,
  }
);

export const gallery =
  mongoose.models.Gallery ||
  mongoose.model<IGallery>("Gallery", GallerySchema);