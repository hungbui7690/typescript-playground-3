/*
  Constraints on conditional types
  - One of the main advantages of conditional types is their ability to narrow down the possible actual types of a generic type.



*/

// For instance, let’s assume we want to define ExtractIdType<T>, to extract, from a generic T, the type of a property named id. In this case, the actual generic type T must have a property named id. At first, we might come up with something like the following snippet of code:
type ExtractIdType<T extends { id: string | number }> = T['id']

interface NumericId {
  id: number
}

interface StringId {
  id: string
}

interface BooleanId {
  id: boolean
}

type NumericIdType = ExtractIdType<NumericId> // type NumericIdType = number
type StringIdType = ExtractIdType<StringId> // type StringIdType = string
type BooleanIdType = ExtractIdType<BooleanId> // ❌

/*
  - Here, we made it explicit that T must have a property named id, with type either string or number. 
    -> Then, we defined three interfaces: NumericId, StringId, and BooleanId.

  - If we attempt to extract the type of the id property, TypeScript correctly returns string and number for StringId and NumericId, respectively. 
    -> However, it fails for BooleanId: Type 'BooleanId' does not satisfy the constraint '{ id: string | number; }'. 
    -> Types of property 'id' are incompatible. Type 'boolean' is not assignable to type 'string | number'.


*/
