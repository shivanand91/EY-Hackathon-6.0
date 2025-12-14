import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 8000,

  NODE_ENV: process.env.NODE_ENV || "development",

  MONGO_URI:
    process.env.MONGO_URI || "mongodb://127.0.0.1:27017/ey_hackathon",

  OPENAI_API_KEY: process.env.OPENAI_API_KEY || null
};
