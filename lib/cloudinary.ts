import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Image upload function
export const upload_image = async (file_str: string, folder: string) => {
  try {
    const result = await cloudinary.uploader.upload(file_str, {
      folder: `hajela_hospital/${folder}`,
      resource_type: 'auto',
      // 🔴 YEH ADD KARO — Faster loading ke liye
      transformation: [
        { quality: 'auto' },
        { fetch_format: 'auto' }
      ]
    });
    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw new Error("Failed to upload image");
  }
};

// Image delete function
export const delete_image = async (public_id: string) => {
  try {
    await cloudinary.uploader.destroy(public_id);
    return { success: true };
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    return { success: false, error };
  }
};

// 🔴 NEW: Get optimized URL directly
export const getOptimizedImageUrl = (publicId: string, width?: number, height?: number) => {
  let url = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
  
  // Add transformations
  const transformations = ['q_auto', 'f_auto'];
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  
  url += `/${transformations.join(',')}/${publicId}`;
  return url;
};