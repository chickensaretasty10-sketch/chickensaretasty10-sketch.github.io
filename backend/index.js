import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.post("/api/chat", upload.single("image"), async (req, res) => {
  try {
    const text = req.body.text || "";
    let imageData = null;
    if (req.file) {
      const fileBuffer = fs.readFileSync(req.file.path);
      imageData = fileBuffer.toString("base64");
      fs.unlinkSync(req.file.path); // remove temp file
    }

    // Gemini API requires this payload structure
    let parts = [];
    if (text) parts.push({ text });
    if (imageData)
      parts.push({
        inline_data: {
          mime_type: req.file.mimetype,
          data: imageData,
        },
      });

    const payload = {
      contents: [
        {
          role: "user",
          parts,
        },
      ],
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro-vision:generateContent?key=${process.env.GEMINI_API_KEY}`,
      payload
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: error?.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
