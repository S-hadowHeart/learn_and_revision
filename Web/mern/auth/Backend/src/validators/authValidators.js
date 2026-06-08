import {z} from "zod"


const registerSchema = z.object({
    name : z 
    .string()
    .trim()
    .min(2 , "Name must be at least 2 characters"),
    email : z 
    .string()
    .trim()
    .min(1 , "Email is required")
    .email("Please provide a valid email")
    .toLowerCase(),
    password : z.string().min(8,"Password is required").regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
    
});


const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please provide a valid email")
    .toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

export { registerSchema , loginSchema }