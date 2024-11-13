/*
  Introduction
  - In the world of TypeScript development, ensuring data integrity and predictability is paramount. 
  - That’s where Zod shines — a powerful schema declaration and validation library that gives your applications an extra layer of robustness. 


----------------------

  What is Zod?
  - At its core, Zod lets you define schemas that meticulously describe the shape and types of your TypeScript data. 
  - Think of these schemas as blueprints for your data structures. Zod then uses these blueprints to validate any data you throw at it, ensuring it conforms to the expected format. 
  - If there’s a mismatch, Zod will provide clear and informative error messages.


----------------------

  Why Zod Matters
  - Type Safety Elevated: Zod acts as a guardian for your TypeScript types. When you define a Zod schema, Zod automatically infers a corresponding TypeScript type. This seamless integration dramatically reduces the need for repetitive type definitions.
  - Runtime Validation: Zod isn’t just about types; it actively validates data at runtime. This is crucial when you’re dealing with external sources like user input, API responses, or database entries — situations where you can’t fully trust the incoming data.
  - Developer Experience: Zod is praised for its developer-friendly syntax. Creating schemas feels intuitive and natural, leading to cleaner, more maintainable code.


----------------------

  - npm i zod



*/

import { z } from 'zod'

// Define a Zod schema
const UserSchema = z.object({
  username: z.string().min(5, 'Username must be at least 5 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must contain at least 8 characters'),
  age: z.number().optional(),
})

// Type inference in action
const validUserData = {
  username: 'joe.doe',
  email: 'joe.doe@example.com',
  password: 'strongPassword123',
}

const myUser = UserSchema.parse(validUserData)

// TypeScript infers the type of 'myUser' as:
// { username: string; email: string; password: string; age?: number }
