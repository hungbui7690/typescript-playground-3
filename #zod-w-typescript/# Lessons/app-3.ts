/*
  Advanced
  - .transform() 
  - .refine()


----------------------

  - Clarity: This code snippet emphasizes the difference between cleaning up data (transformation) and adding extra validation rules (refinement).
  - Data Integrity: Zod ensures that user-provided data is structured correctly, standardized, and safe to use.



*/

import { z } from 'zod'

const UserSchema = z.object({
  username: z
    .string()
    .min(5, 'Username must be at least 5 characters')
    .transform((username) => username.trim().toLowerCase()), // @
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must contain at least 8 characters'),
  zipCode: z
    .string()
    .refine(
      (value) => value.length === 5 && /^\d{5}$/.test(value),
      'Invalid zip code format'
    ), // @
})

// @
type User = z.infer<typeof UserSchema>

// Usage
const untidyInput = {
  username: '  Alice75  ',
  email: 'alice@Example.com', // Incorrect casing
  password: 'verystrongpassword',
  zipCode: '12345',
}

const parsedUser = UserSchema.parse(untidyInput)

console.log(parsedUser)
// Output:
// { username: 'alice75',
//   email: 'alice@example.com',
//   password: 'verystrongpassword',
//   zipCode: '12345'
// }
