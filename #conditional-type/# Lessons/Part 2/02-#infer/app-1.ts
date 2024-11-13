/*
  <infer> keyword
  - There is an <infer> keyword that can be used within a condition in a conditional type to put the inferred type into a variable. That inferred variable can then be used within the conditional branches.



*/

type ArrayElementType<T> = T extends (infer E)[] ? E : T

type item1 = ArrayElementType<number[]>

type item2 = ArrayElementType<{ name: string }>

// When <item1> is constructed, the condition in the conditional type is <true> because <number[]> matches (infer E)[]. <E> is therefore inferred to be <number> during this matching process. The first branch of the condition, <E>, is returned, which is resolved to be <number>.

// When <item2> is constructed, the condition in the conditional type is <false> because <{name: string}> does not match (infer E)[]. Therefore the second branch of the condition, <T>, is returned, which is the original parameter passed in, <{name: string}>.
