/*
  A non-generic function



*/

// This function is strongly-typed, which is excellent, but what if we need to do the same thing for an array of <numbers>? We can't use the above function because it is restricted for arrays of strings. Wouldn't it be nice if we could pass the array item type into this function? Well, this is what generic functions allow us to.
function firstOrNull(array: string[]): string | null {
  return array.length === 0 ? null : array[0]
}
