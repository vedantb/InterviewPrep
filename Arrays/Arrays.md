- Array problems often have simple brute-force solutions that use `0(n)` space, but subtler solutions that **use the array itself** to **reduce space complexity** to `O(1)`.
- Filling an array from the front isslow, so see if it's possible to **write values from the back**.
- Instead of deleting an entry (which requires moving all entries to its right), consider **overwriting** it.
- When dealing with integers encoded by an array consider **processing the digits from the back** of the array. Alternately, reverse the array so the **least-significant digit is the first entry**.
- Be comfortable with writing code that operates on **subarrays**.
- It's incredibly easy to make **off-by-1 errors** when operating on arrays.
- Don't worry about preserving the integrity of the array (sortedness, keeping equal entries together, etc.) until it is time to return.
-
- When operating on 2D arrays, use **parallel logic** for rows and for columns.
- Sometimes it's easier to simulate the specification, than to analytically solve for the result. For example, rather than writing a formula for the i-th entry in the spiral order for an n X n matrix, just compute the output from the beginning.

**Know your Array Libraries**

slice - The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (`end` not included) where `begin` and `end` represent the index of items in the array.
`begin` is 0 by default and `end` is `arr.length` by default or when its more than the length

slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:

- For object references (and not the actual object), slice copies object references into the new array. Both the original and new array refer to the same object. If a referenced object changes, the changes are visible to both the new and original arrays.
- For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values in the new array and changes in one do not affect the other.
- new element added to either array does not affect the other

#### Problems:

1. Dutch National Flag Problem (sortColors)
2. Increment an Arbitrary Precision Integer (plusOne)
3. Multiply Two Arbitrary Precision Integers ()
