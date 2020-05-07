## Common String Patterns

### Using a Length=256 Integer Array

If we wanted to count the occurrences of each character in a string, the obvious approach might be to use some sort of hashtable or dictionary. We could just map the characters to the count of the number of times they occur.

Pretty easy, right?

Except that this really isn’t the best way to do it. A better way would be to use a length-256 array (let’s assume we’re using ASCII) where the index in the array represents the ASCII value of the character and the value at that index represents the count.

Therefore, if we had the string "aaabb", arr[97] = 3 and arr[98] = 2.

Why do this instead of using a hashmap? Simply put, arrays are a much simpler data structure. That means that the computer can manipulate them much faster and you will improve the efficiency of your code.

The one downside of course is that you may be allocating space that you don’t need. A hashmap only allocates space for the characters present in the string. However, this is a small price to pay and the array is a relatively small fixed size, so it is usually worth the cost.

- Given two strings, write a function to determine whether they are anagrams.
- Given a string of lowercase characters from ‘a’ – ‘z’. We need to write a program to print the characters of this string in sorted order.
- Longest substring without a repeating character

### Using 2 Pointers

Algorithms that use multiple pointers are super common all over the place. Therefore it’s really good to have a firm grasp of some of the ways this can be helpful.

For starters, we can talk about finding all substrings of a string. Using two pointers and a nested for loop, we can find all the substrings quite easily:

```js
function substrings(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      console.log(s.substring(i, j));
    }
  }
}
```

With our two pointers, we simply find every combination of starting point and ending point for our substring. If we wanted to do something with these, we could add them to a list or do any of a million other things.

Another way that we can use two pointers is to reverse a string in place. We will use 2 pointers to find pairs of characters to swap:

```js
function reverse(s) {
  let arr = s.split('');
  for (let i = 0; i < arr.length / 2; i++) {
    let j = arr.length - i - 1;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.join('');
}
```

Notice two things here. For one, we converted the string into a char array to make it easier for us to swap characters (remember strings are immutable) and we were also able to compute our j pointer from i, rather than having to actually iterate over it separately.

- remove duplicates from sorted array
- valid palindrome
- reverse words in a string

### String Math

Sometimes we like to convert between strings and integers, refer to characters by their ASCII values, and all sorts of other goodness like that.

Things to know:

- Get the ASCII value of a character
- Convert an ASCII value into a character
- Convert a digit character into its integer value (ie. convert "5" into 5)

We can also figure out some of these by adding and subtracting different characters from each other.

These sorts of formulas give us a quick and dirty way to figure out things such as what digit a character represents or what number letter a certain letter is in the alphabet.

Another thing that we might want to do is to convert larger numbers into strings or vice versa. To do this we’re going to need to get a little bit more creative. Specifically, we have to be sure to account for the different place values in the number.

- convert strings to Binary
- string to integer
- compare version numbers

### String Sliding Windows

Sliding windows are a technique that come up a lot when talking about strings and arrays and can be valuable in a lot of different cases. They can make it possible for us to dramatically improve our time complexity in certain cases.

Essentially, sliding windows are a special case of our two pointer pattern that we looked at earlier. We will keep track of a “window” within the string (the range between the two pointers) and only consider the characters within that window at any given time.

What does this allow us to do? Let’s consider the problem of finding the longest substring that doesn’t have any repeated characters.

Obviously our brute force approach could simply be to look at all possible substrings and then check whether they had duplicate characters, but that would take us O(n^3) time (we have to iterate over each of n^2 different substrings, which takes n time).

But with a sliding window, we can use a greedy approach. Essentially, we will try to move our front pointer forward as far as we can without getting a duplicate character. However, as soon as we find a duplicate character, we can move up our second pointer until it’s no longer duplicated.

```js
let longestNonduplicatedSubstring = function (s) {
  let result = 0;
  let containsChar = new Array(256);
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (containsChar[i]) {
      for (; j < i; j++) {
        containsChar[j] = false;
        if (s.charCodeAt(j) === s.charCodeAt(i)) {
          j++;
          break;
        }
      }
    }
    containsChar[i] = true;
    result = Math.max(result, i - j + 1);
  }
};
```

Essentially what we are doing is continually maintaining the maximum sized window that we can have without containing duplicate characters. This allows us to solve the problem in `O(n)` time (Note: Even though we have nested `for` loops, `j` only goes from `0` to `s.length` once).

- Find all anagrams in a string
- minimum window substring (Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n))
- substring with concatenation of all words - You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

### String Comparison, Alignment, and Matching

We’ve already talked about how you can use 2 pointers in a string to do a variety of different things, from reversing a string to creating a sliding window.

However there’s one more unique application of this basic technique that we need to cover, and that is when we have 2 different strings. By having one pointer in the first string and one pointer in the second string simultaneously, we can do a whole host of different things.

One really common case in which we might use this is to compare two strings. For example, let’s look at how we might determine if one string is a substring of another:

```js
let isSubstring = function (s, sub) {
  for (let i = 0; i < s.length - sub.length; i++) {
    if (s[i] === sub[0]) {
      let matches = true;
      for (let j = 0; j < sub.length; j++) {
        if (s[i + j] !== sub[j]) {
          matches = false;
          break;
        }
      }
      if (matches) return true;
    }
  }
  return false;
};
```

This is a very simple example, but particularly using recursion we can get a lot more advanced. For example, recursion allows us to consider multiple different combinations of pointers to determine which is the best combination, a la finding the longest common substring.

- Longest common substring
- Edit Distance
  Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2. Operations permitted - insert character, delete character, replace character
- Regex Matching - Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '\*'.

### Regular Expressions

The key things that you really need to know here are wildcard matching and repetitions (., \*, and + operators). With just these, you will know basically all that you need for interviews.

When thinking about regular expressions for interviewing, there are two specific aspects that you should keep in mind and be prepared for:

1. How to use built in regular expression matching for your language
2. How to implement basic regular expression matching

- Regex Matching
- Wildcard Matching - Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '\*'.

### String Algorithms

The last series of patterns that you should be aware of for your interview is the variety of string-specific algorithms that exist out there. While this is by no means an exhaustive list, it gives you a sense of some things you might want to look at.

Don’t worry about memorizing the names and exactly how each algorithm works. There’s basically a zero chance that you’ll actually be asked about that.

The key with these algorithms is to understand the core patterns and concepts that make them work, similar to what we’ve been talking about so far in this post. Focusing on learning the underlying strategy will make these most worth your while.

- `KMP` - This is a pattern searching algorithm designed to help you more efficiently search for substrings in a larger string. Rather than searching through the entire substring repeatedly, it allows us to optimize to an `O(n)` time complexity.

- `Boyer Moore` - This is another pattern searching algorithm that enables us to improve our complexity by doing a degree of preprocessing on the substring before performing the search.

- `Rabin Karp` - This final string searching algorithm uses hashing applied to smaller parts of the string to perform an efficient search.
