import { z } from "zod";

// ? Pake zod harus bikin "tipe data validasinya" (schema)
export const ZodInputValidationSchema = z.object({
  setup: z.string(),
  punchline: z.string(),
  type: z.string(),
});
