const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

// Upload file
router.post("/upload", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(201).json({
      message: "File uploaded successfully",
      fileId: req.file.id,
      filename: req.file.filename,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
