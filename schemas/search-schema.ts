import { z } from 'zod';

export const searchSchema = z.object({
  name: z.string().optional(),
  age: z.union([z.string(), z.number()]).optional()
});
