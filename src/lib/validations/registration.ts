import { z } from "zod"

export const registrationSchema = z.object({
    teamName: z.string().min(2, "Team name must be at least 2 characters"),
    captainName: z.string().min(2, "Captain name required"),
    email: z.string().email("Invalid email address"),
    robotName: z.string().min(2, "Robot unit identifier required"),
    weightClass: z.enum(["Lightweight", "Middleweight", "Heavyweight", "Super Heavyweight"]),
    tacticalDescription: z.string().max(500, "Limit description to 500 chars").optional(),
    safetyCheck: z.boolean().refine((val) => val === true, {
        message: "Safety protocols must be acknowledged",
    }),
})

export type RegistrationValues = z.infer<typeof registrationSchema>
