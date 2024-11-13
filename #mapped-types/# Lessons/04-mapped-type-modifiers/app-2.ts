/*
  Using mapped type modifiers
  + { [K in keyof T]?: TypeName }
    -> ?: optional key

-----------------

  + { readonly [K in keyof T]: TypeName }
    -> readonly key

-----------------

  + { [K in keyof T]-?: TypeName }
    -> -?: required key

-----------------

  + { -readonly [K in keyof T]: TypeName }
    -> -readonly: writable property



*/

type Contact = {
  name: string
  email?: string
}

type RequiredProperties<T> = {
  [K in keyof T]-?: string // @ required key
}

// @ The type error is raised because <email> is <required> and hasn't been specified in bob.
const bob: RequiredProperties<Contact> = {
  name: 'Bob',
}

console.log(bob)
