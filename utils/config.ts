import dotenv from 'dotenv';

dotenv.config();

export const MONGO_URL = process.env.MONGO_URL;

export const TOKEN_SECRET = process.env.TOKEN_SECRET;

export const PORT = process.env.PORT || 8000;