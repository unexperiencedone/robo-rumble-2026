"use server"

import { registrationSchema, RegistrationValues } from "@/lib/validations/registration"

export async function registerTeam(data: RegistrationValues) {
    // Simulate server-side validation
    const result = registrationSchema.safeParse(data)

    if (!result.success) {
        return { success: false, error: "Invalid data format detected by mainframe." }
    }

    // Simulate network/DB delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Here you would typically save to DB (Prisma, etc.)
    // await prisma.team.create({ data })

    console.log("Team Registered:", data)

    return {
        success: true,
        message: "Unit registered successfully. Awaiting classification audit."
    }
}
