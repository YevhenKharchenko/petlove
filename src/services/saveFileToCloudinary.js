import axios from 'axios';
import { toast } from 'react-toastify';
import { CLOUDINARY } from '../constants/index.js';

export const saveFileToCloudinary = async file => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', `${CLOUDINARY.UNSIGNED_PRESET_NAME}`);

  try {
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY.CLOUD_NAME}/image/upload`,
      formData
    );

    return data.secure_url;
  } catch (e) {
    toast.error(`Upload failed: ${e.message}. Please try again.`);
  }
};
