import { z } from "zod";

export const userLoginSchema = z.object({
	email: z.string().nonempty({ message: "Email is required" }).email({ message: "Invalid email address" }),
	password: z.string().nonempty({ message: "Password is required" }).min(5, { message: "Password must be 5 or more characters long" }),
}).required();