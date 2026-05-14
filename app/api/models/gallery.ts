import mongoose, { Schema, Document } from 'mongoose';

export interface IGallery extends Document {
  title: string;
  category: 'icu' | 'ot' | 'ward' | 'exterior' | 'camps';
  image_url: string;
  image_id: string;
}

const GallerySchema = new Schema<IGallery>({
  title: { type: String, required: true },
  category: { type: String, enum: ['icu', 'ot', 'ward', 'exterior', 'camps'], required: true },
  image_url: { type: String, required: true },
  image_id: { type: String, required: true },
}, { timestamps: true });

export const gallery = mongoose.models.gallery || mongoose.model<IGallery>('gallery', GallerySchema);