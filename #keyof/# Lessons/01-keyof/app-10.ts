/*
  Using <keyof> with <conditional> <mapped> types
  - In the previous example, we mapped all the properties to a Boolean type. We can go one step further and use conditional types to perform conditional type mapping.



*/

type OptionsFlags<T> = {
  [Property in keyof T]: T[Property] extends Function ? T[Property] : boolean
}

type Features = {
  darkMode: () => void
  newUserProfile: () => void
  userManagement: string
  resetPassword: string
}

type FeatureOptions = OptionsFlags<Features>
/*
  type FeatureOptions = {
    darkMode: () => void;
    newUserProfile: () => void;
    userManagement: boolean;
    resetPassword: boolean;
  } 
*/

// We can see how handy it is to map the Features type to a FeatureOptions type in the example. But best of all — any future changes in the source FeatureFlags type will be reflected in the FeatureOptions type automatically.
