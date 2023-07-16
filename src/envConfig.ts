import { config } from "dotenv";
config();

export default {
  PORT: process.env.PORT || undefined,
  CLIENT_URL: process.env.CLIENT_URL || undefined,
  REDIS_HOST: process.env.REDIS_HOST || undefined
};
