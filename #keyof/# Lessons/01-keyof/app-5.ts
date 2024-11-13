/*
  <keyof> <typeof> pattern



*/

const userProfile = {
  username: 'john_doe',
  email: 'john@example.com',
  age: 30,
  isAdmin: false,
}

// @ The UserProfileKeys type is a union of literal types containing the keys username, email, age, and isAdmin.
type UserProfileKeys = keyof typeof userProfile // "username" | "email" | "age" | "isAdmin"

// @ This type can be useful for creating functions or components that need to work with various user profile properties in a type-safe manner:
function getUserInfo(key: UserProfileKeys): any {
  return userProfile[key]
}

const usernameValue = getUserInfo('username') // Type-safe access

// 🌲 In the above example, the <getUserInfo> function takes a <key> parameter <constrained> to the <UserProfileKeys> type, ensuring that only valid keys of <userProfile> can be passed. This helps prevent runtime errors and enhances the overall type safety of our code
