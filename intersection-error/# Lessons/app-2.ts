/*
  Type Intersection



*/

type Name = {
  firstName: string
  lastName: string
}
type PhoneNumber = {
  landline: string
  mobile: string
}

type Email = {
  emailAddress: string
}

// @ type intersection
type Contact = Name & PhoneNumber & Email

const fred: Contact = {
  firstName: 'Fred',
  lastName: 'Smith',
  landline: '0116 4238978',
  mobile: '079543 4355435',
  emailAddress: 'fred.smith@someemail.com',
}
