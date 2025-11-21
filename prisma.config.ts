import { defineConfig } from "@prisma/config";

export default defineConfig({
  datasources: {
    db: {
      provider: "postgresql",
      connectionUrl: process.env.DATABASE_URL!,
    },
  },
});
