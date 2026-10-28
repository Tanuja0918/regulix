import { z } from 'zod';

export const complianceSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),
  registrationNumber: z.string().regex(/^[A-Z0-9]{6,10}$/, "Invalid Registration Format"),
  sector: z.enum(["Mining", "Energy", "Manufacturing", "Logistics"]),
  environmentalMetric: z.coerce.number().min(0, "Must be a positive number"),
  declarationAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the compliance declaration" }),
  }),
});