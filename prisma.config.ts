import { defineConfig } from '@prisma/config';

export default defineConfig({
  client: {
    provider: "postgresql",
    url: process.env.DATABASE_URL,
    directUrl: process.env.DIRECT_URL,
  }
});
