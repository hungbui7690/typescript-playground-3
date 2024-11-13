/*
  Creating a mapped type
  - A mapped type is the process of creating a new type by mapping type information from an existing type.
    -> type MappedTypeName = { [K in UnionType]: ExistingType };


------------------

  - The in operator maps over each item in the union type to create a new type. 
  - In other words, the in operator allows us to loop through each type in a union type. 
  - In a loop iteration, watch item in the union type is put in K, which becomes a key in the new type. 
  - So, the union type is usually a union of string literals. 
  - The type annotation in the mapped type is the type given to each key in the type.



*/

type ContactDetails = {
  [K in 'name' | 'email']: string
}
// ...will create the following type
// {
//   name: string;
//   email: string;
// }
