import * as z from 'zod';

const envSchema = z.object({
  BASE_URL: z.string().url().default('http://localhost:3800'),
});

export const ENV = envSchema.parse({
  BASE_URL: process.env.VITE_BASE_URL,
});
