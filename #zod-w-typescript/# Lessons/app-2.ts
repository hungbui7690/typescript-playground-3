/*
  parse vs. safeParse
  - Zod offers two primary methods for validation:
    # parse: Throws an error if validation fails. Use this when you have high confidence in the data’s structure and want to catch potential errors early.
    # safeParse: Returns a result object containing either the parsed data on success or an error object on failure. This is ideal when dealing with less predictable data, allowing you to gracefully handle validation issues.



*/

import { z } from 'zod'

const UserSchema = z.object({
  username: z.string().min(5, 'Username must be at least 5 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must contain at least 8 characters'),
  age: z.number().optional(),
})

const userInput = { username: 'jane', email: 'not-an-email' }

// @ parse will throw an error
try {
  UserSchema.parse(userInput)
} catch (error) {
  console.error('Validation failed:', error)
}

// @ safeParse returns a result
const result = UserSchema.safeParse(userInput)
if (!result.success) console.error('Validation failed:', result.error)
