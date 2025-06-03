import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const respone = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //filr has been uploaded successfully
    console.log("File is uploaded on cloudinary", respone.url);
    return respone;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };

// cloudinary.v2.uploader.upload(
//   "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
//   {
//     public_id: "shoes",
//   },

//   function (error, result) {
//     console.log(result);
//   }
// );
