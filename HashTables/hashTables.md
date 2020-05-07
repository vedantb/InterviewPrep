The idea underlying hash tables is to store objects according to their key field in an array. Objects are not stored in array locations based on the "hash code" of the key. The hash code is an integer computed from the key of an hash function. If the hash function is chosen well, objects are distributed uniformly across array locations.

If two keys map to the same location, a "collision" is said to occur. The standard mechanism to deal with collisions is to maintain a linked list of objects at each array location. If the hash does a good job of spreading objects across the underlying array and take O(1) time to compute, on average, lookups, insertions and deletions have O(1 + n/m) time complexity, where n is the number of objects and m is the length of the array. If the "load" n/m grows large, rehashing can be applied to the hash table. A new array with a larger number of locations is allocated, and objects are moved to the new array. Rehashing is expensive (O(n+m)) time, but if done infrequently, it's amortized cost is low.

A hash table is qualitatively different from a sorted array—keys do not have to appear in order, and randomization plays a central role. Compared to BSTs, inserting and deleting in a hash table is more efficient. One disadvantage of hash tables is the need for a good hash function but this is rarely an issue in practice. Similarly, rehashing is not a problem outside of realtime systems and even for such systems a separate thread can do the rehashing.

A hash function has one hard requirement - equal keys should have equal hash codes. This may seem obvious, but is easy to get wrong. e.g. by writing a hash function based on the address rather than the contents, or by including profiling data.

A softer requirement is that the hash function should "spread" keys, i.e., the hash codes for a subset of objects should be uniformly distributed across the underlying array. In addition, a hash function should be efficient to compute.

A common mistake with hash tablesisthat a key that's present in a hash table will be updated. The consequence is that a lookup for that key will now fail, even though it's still in the hash table. If you have to update a key, first remove it, then update it and finally add it back - this ensures it's moved the correct array location. As a rule, avoid using mutable objects as keys.

### Implement a HashSet

Two key questions to address - **hash function** and **collision handling**

- **hash function** - The goal of the hash function is to assign an address to store a given value. Ideally, each unique value should have an unique hash value.
- **collision handling** - Since nature of a hash function is to map a value from a space `A` into a corresponsing value in **smaller** space `B`, it could happen that multiple values from space `A` might be mapped to the same value in space `B`. This is a **collision**.

Several strategies to resolve collisions:
**Separate Chaining** - for values with the same hash key, keep them in a bucket and each bucket is independent from each other.
**Open Addressing** - whenever there is a collision, we keep on probing on the main space with some strategy until a free slot is found.
**2-choice hashing** - use two hash functions rather than one, and pick the generated address with fewer collisions

We use **separate chaining**:

- Essentially, the primary storage underneath a HashSet is a continuous memory as `Array`. Each element in this `array` corresponds to a `bucket` that stores the actual values.
- Given a `value`, first we generate a key via the hash function. The generated key serves as the index to locate the bucket.
- Once the `bucket` is located, we perform the desired operations on the bucket, such as `add`, `remove` and `contains`
