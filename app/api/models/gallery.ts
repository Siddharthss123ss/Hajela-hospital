import mongoose, { Document, Schema } from "mongoose";

export interface IGallery extends Document {
  title: string;
  category: "icu" | "ot" | "ward" | "exterior" | "camps";
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
      enum: ["icu", "ot", "ward", "exterior", "camps"],
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

export const Gallery =
  mongoose.models.Gallery ||
  mongoose.model<IGallery>("Gallery", GallerySchema);