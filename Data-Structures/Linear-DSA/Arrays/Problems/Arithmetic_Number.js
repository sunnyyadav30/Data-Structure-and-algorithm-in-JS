/** Given three integers  'A' denoting the first term of an arithmetic sequence , 
'C' denoting the common difference of an arithmetic sequence and an integer 'B'. 
you need to tell whether 'B' exists in the arithmetic sequence or not. 
Return 1 if B is present in the sequence. Otherwise, returns 0.

Example :
Input: A = 1, B = 3, C = 2
Output: 1
Explaination: 3 is the second term of the 
sequence starting with 1 and having a common 
difference 2.
**/

const inSequence = (A, B, C) => {
  if (C === 0) {
    return A === B ? 1 : 0;
  }
  const modulus = (B - A) % C;
  const isGreaterThanZero = (B - A) / C >= 0;
  if (modulus === 0 && isGreaterThanZero) {
    return 1;
  } else {
    return 0;
  }
};

/** 
Editorial
Expected Approach:
Intuition:
To solve this problem you can use the concept of Arithmetic Progression. 
That is nth term of an Arithmetic sequence starting with 'a' and common difference 'd' is a + (n-1)*d.

Implementation:
Firstly you need to observe some cases.

Case 1: The first term is A. If B is greater than A, then C must be positive.

Case 2: If B is lesser than A, then C must be negative.

Case 3: Suppose d = difference between A and B. If B want to exist in the arithmetic sequence, 
d must be divisible by C.

Complexity:
Time Complexity: O(1)
Space Complexity: O(1) 
 **/
