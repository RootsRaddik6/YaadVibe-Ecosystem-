import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasources: {
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL,
      directUrl: process.env.DIRECT_URL
    }
  }
});
