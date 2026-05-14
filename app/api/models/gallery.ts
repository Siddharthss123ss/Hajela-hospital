import mongoose, { Schema, Document } from 'mongoose';

export interface IGallery extends Document {
  title: string;
  imageUrl: string;
  category: 'Infrastructure' | 'Equipment' | 'Events' | 'Wards';
  uploadedAt: Date;
}

const GallerySchema = new Schema<IGallery>({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Infrastructure', 'Equipment', 'Events', 'Wards'], 
    default: 'Infrastructure' 
  },
  uploadedAt: { type: Date, default: Date.now },
});

export const Gallery = mongoose.models.Gallery || mongoose.model<IGallery>('Gallery', GallerySchema);