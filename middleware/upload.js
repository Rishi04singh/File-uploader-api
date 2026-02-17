const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
require("dotenv").config();   // 🔥 THIS LINE IS IMPORTANT

const storage = new GridFsStorage({
  url: process.env.MONGO_URI, // 🔥 now it will read .env
  file: (req, file) => {
    return {
      filename: `${Date.now()}-${file.originalname}`,
      bucketName: "uploads",
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
