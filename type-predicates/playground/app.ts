/*
  Type Predicates



*/

// Another Example
type Album = { name: string; copiesSold: number }
type Artist = { name: string; topSellingAlbum: Album | undefined }

function isAlbum(maybeAlbum: Album | undefined): maybeAlbum is Album {
  return maybeAlbum !== undefined
}

const artist: Artist = {
  name: 'Pink Floyd',
  topSellingAlbum: {
    name: 'The Dark Side of the Moon',
    copiesSold: 24400000,
  },
}

let album: Album
if (isAlbum(artist.topSellingAlbum)) {
  album = artist.topSellingAlbum
} else {
  album = { name: 'unknown', copiesSold: 0 }
}

// 🍉 Some type predicates like <Array.isArray> come with the TypeScript compiler. However, they're implemented using the same type predicate syntax that we saw above. The only special thing about them is that they're defined in files that come with TypeScript itself.
// 🌲 Two quick notes to wrap up this lesson. First, the term "type predicate" sometimes refers specifically to the address is Address syntax. Other times, "type predicate" refers to an entire function using that return type syntax. We'll use it in both ways in this course.
